<?php
// При необходимости поменять на $_POST
if (!empty($_GET['id'])) {
	$requestedId = $_GET['id'];

	// Открытие файла для чтения ('r')
	// getcwd() - текущая папка php скрипта
	$descriptor = fopen(getcwd() .DIRECTORY_SEPARATOR . 'teamlist.csv', 'r');

	// Чтение строк из csv файла
	$lines = [];
	while ($csvLine = fgetcsv($descriptor))
		$lines[] = $csvLine;

	// Если первая строка это заголовок, чек по наличию '№ удостоверения' в 3 столбце первой строки
	$header = null;
	if ($lines[0][2] === '№ удостоверения')
		// Если есть, вынимаем его из массива
		$header = array_shift($lines);

	/*
	Ищем переданное выше значение в обработанно массиве
	array_column берет n-мерный массив
	(2-мерный в нашем случае, массив строк в каждой из которых по три столбца)
	и вынимаем свойство 2, т.е. столбец по 2 индексу, т.е. 3 столбец
	*/
	$linesSearchIndex = array_column($lines, 2);
	$foundIndex = array_search($requestedId, $linesSearchIndex);
	if ($foundIndex !== false) {
		// Если нашли совпадение возвращаем всю строку по найденному индексу
		$found = $lines[$foundIndex];
		/*
		Завершаем скрипт отдавая json-объект из частей строки,
		второй столбец имя, третий столбец №, первый столбец порядковый номер
		Из порядкового номера склеиваем ссылку на изображение
		*/
		// die('124[fdj538]');
		die(json_encode([
			'name' => $found[1],
      'id' => $found[2],
      'picture' => '/assets/images/team' . $found[0] . '.png'
    ]));
  } else {
    // Отдаем ошибку если поиск не нашел №
    http_response_code(404);
    die(json_encode([
      'error' => 'User not found',
    ]));
  }
}
?>

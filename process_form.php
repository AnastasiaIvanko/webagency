<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $projectType = $_POST["project_type"];
    $projectDetails = $_POST["project_details"];

    // Здесь вы можете добавить дополнительные действия, например, сохранение данных в базу данных или отправку уведомления по электронной почте.

    // Просто выведем данные для демонстрации
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Project Type: $projectType<br>";
    echo "Project Details: $projectDetails<br>";
} else {
    echo "Invalid request.";
}
?>

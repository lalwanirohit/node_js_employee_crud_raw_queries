COMMAND TO RUN PROJECT

npm start

SQL QUERIES TO CREATE TABLE AND INSERT RECORDS

CREATE TABLE `nodepractice`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` TEXT(150) NOT NULL,
  `designation` VARCHAR(45) NOT NULL,
  `created_at` VARCHAR(45) NULL,
  `updated_at` VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `nodepractice`.`employee` 
CHANGE COLUMN `created_at` `created_at` DATETIME NULL DEFAULT NULL ,
CHANGE COLUMN `updated_at` `updated_at` DATETIME NULL DEFAULT NULL ;

INSERT INTO `employee` (`id`, `name`, `email`, `designation`, `created_at`, `updated_at`) VALUES (NULL, 'Rohit Lalwani', 'lalwanirohit111@gmail.com', 'Software Developer', '2023-01-29 17:24:05', NULL);
INSERT INTO `employee` (`id`, `name`, `email`, `designation`, `created_at`, `updated_at`) VALUES (NULL, 'Sanket Lalwani', 'lalwanisanket111@gmail.com', 'Lawyer', '2023-01-29 17:24:05', NULL);
INSERT INTO `employee` (`id`, `name`, `email`, `designation`, `created_at`, `updated_at`) VALUES (NULL, 'Harshit Lalwani', 'lalwaniharshit111@gmail.com', 'Principal', '2023-01-29 17:24:05', NULL);
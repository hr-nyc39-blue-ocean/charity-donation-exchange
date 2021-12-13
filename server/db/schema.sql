-- ---
-- Globals
-- ---

DROP DATABASE IF EXISTS blueocean2;

CREATE DATABASE blueocean2;

USE blueocean2;

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `userID` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(64) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  `token` VARCHAR(64) NULL DEFAULT NULL,
  PRIMARY KEY (`userID`)
);

-- ---
-- Table 'Listings'
--
-- ---

DROP TABLE IF EXISTS `Listings`;

CREATE TABLE `Listings` ( -- note they are all strings except ID, qty, zipcode
  `listingID` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `quantity` INTEGER NOT NULL,
  `date` DATETIME NOT NULL,
  `zipcode` INTEGER NOT NULL,
  `photoURL` VARCHAR(200) NULL DEFAULT NULL,
  `charityOnly` VARCHAR(10) NOT NULL,
  `claimed` VARCHAR(10) NULL DEFAULT 'false', -- 'true', 'false'
  `claimerName` VARCHAR(50) NULL DEFAULT NULL,
  `claimerPhone` VARCHAR(10) NULL DEFAULT NULL,
  `claimerEmail` VARCHAR(50) NULL DEFAULT NULL,
  `status` VARCHAR(20) DEFAULT 'open', -- 'open', 'closed', 'pending', 'cancelled'
  `userID` INTEGER NOT NULL,
  PRIMARY KEY (`listingID`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Listings` ADD FOREIGN KEY (userID) REFERENCES `Users` (`userID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`userID`,`username`,`password`,`name`,`email`,`phone`) VALUES
-- ('','','','','','');
-- INSERT INTO `Listings` (`listingID`,`name`,`category`,`date`,`location`,`photoURL`,`charityOnly`,`claimed`,`claimerName`,`claimerPhone`,`claimerEmail`,`status`,`userID`) VALUES
-- ('','','','','','','','','','','','','');


-- to execute this file in terminal: mysql -u root < ./server/db/schema.sql from top level directory

LOAD DATA LOCAL INFILE '/Users/jhwang/Downloads/UsersData.csv'
INTO TABLE Users
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(username, password, name, email, phone);

LOAD DATA LOCAL INFILE '/Users/jhwang/Downloads/ListingsData.csv'
INTO TABLE Listings
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(name, category, quantity, date, zipcode, charityOnly, userID);
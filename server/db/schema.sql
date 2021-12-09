-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
--
-- ---

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `userID` INTEGER NOT NULL AUTO_INCREMENT,
  `username (unique)` VARCHAR(40) NOT NULL,
  `password` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`userID`)
);

-- ---
-- Table 'Listings'
--
-- ---

DROP TABLE IF EXISTS `Listings`;

CREATE TABLE `Listings` (
  `listingID` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `date` DATETIME NOT NULL,
  `location` INTEGER NOT NULL,
  `photoURL` VARCHAR(200) NULL DEFAULT NULL,
  `charityOnly` VARCHAR(10) NOT NULL,
  `claimed` VARCHAR(10) NOT NULL DEFAULT 'unclaimed',
  `status` VARCHAR(20) NULL DEFAULT 'active',
  `userID` INTEGER NOT NULL,
  PRIMARY KEY (`listingID`)
);

-- ---
-- Table 'Claimsinfo'
--
-- ---

DROP TABLE IF EXISTS `Claimsinfo`;

CREATE TABLE `Claimsinfo` (
  `claimID` INTEGER NOT NULL AUTO_INCREMENT,
  `claimerName` VARCHAR(50) NOT NULL,
  `claimerPhone` VARCHAR(10) NOT NULL,
  `claimerEmail` VARCHAR(50) NOT NULL,
  `listingID` INTEGER NOT NULL,
  PRIMARY KEY (`claimID`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Listings` ADD FOREIGN KEY (userID) REFERENCES `Users` (`userID`);
ALTER TABLE `Claimsinfo` ADD FOREIGN KEY (listingID) REFERENCES `Listings` (`listingID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Listings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Claimsinfo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`userID`,`username (unique)`,`password`,`name`,`email`,`phone`) VALUES
-- ('','','','','','');
-- INSERT INTO `Listings` (`listingID`,`name`,`category`,`date`,`location`,`photoURL`,`charityOnly`,`claimed`,`status`,`userID`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `Claimsinfo` (`claimID`,`claimerName`,`claimerPhone`,`claimerEmail`,`listingID`) VALUES
-- ('','','','','');
-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2020 at 07:33 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinemealcartdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE `userprofile` (
  `userID` int(11) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Age` int(11) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `Phone` int(11) DEFAULT NULL,
  `Address` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userprofile`
--

INSERT INTO `userprofile` (`userID`, `Name`, `Age`, `DOB`, `Phone`, `Address`) VALUES
(1, 'Imashi', 21, '1999-05-07', 761234532, 'no:82,sunanda rd, matara'),
(2, 'sanju', 24, '1995-03-26', 712345434, 'no:60,flower garden rd, wattala'),
(3, 'Tharani', 29, '2000-05-18', 772343234, 'no:3, wellegoda, matara'),
(5, 'G.H Achini', 23, '1998-05-06', 702342300, 'No:29,battaramulla, colombo'),
(14, 'shaini J.S', 22, '0000-00-00', 721700091, 'no:29, malimbada, matara'),
(15, 'charmie', 22, '1998-05-01', 771900035, 'No:70,\r\nsandathenna rd,\r\nmalambe'),
(16, 'S.W Lihansa', 19, '1995-05-03', 762910000, 'N0:360,suriyagahapittaniya, wellegoda, m');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userprofile`
--
ALTER TABLE `userprofile`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

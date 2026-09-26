-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 17, 2026 at 06:50 AM
-- Server version: 8.0.40
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_analytics_930am`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_appointment`
--

CREATE TABLE `tbl_appointment` (
  `apid` int NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `address` text,
  `appointment_date_time` datetime DEFAULT NULL,
  `status` tinyint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employee`
--

CREATE TABLE `tbl_employee` (
  `empid` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `address` text,
  `employee_age` int DEFAULT NULL,
  `salary` decimal(10,4) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_employee`
--

INSERT INTO `tbl_employee` (`empid`, `name`, `email`, `mobile`, `address`, `employee_age`, `salary`, `department`) VALUES
(1, 'megha', 'megha007@gmail.com', 9121323612, 'rajkot', 19, 20500.1456, 'IT'),
(2, 'shrushti', 'shrusti007@gmail.com', 9121323812, 'rajkot', 19, 20500.0000, 'IT'),
(6, 'LAKHANI kishan', 'kishan007@gmail.com', 9128213624, '150 feet ring road rajkot', 22, 20580.6587, 'CSE'),
(7, 'deep', 'deep007@gmail.com', 9521323618, 'ahemdabad', 21, 21500.4587, 'CSE'),
(10, 'brijesh', 'brijesh007@gmail.com', 9191923812, 'rajkot', 34, 120500.0000, 'HR'),
(11, 'deep', 'deep008@gmail.com', 9521623618, 'ahemdabad', 21, 21500.4587, 'IT'),
(12, 'lokesh', 'lokesh@gmail.com', 9998003871, '150 rjt', 40, 850000.0000, 'IT'),
(13, 'prince', 'prince@gmail.com', 9998003879, 'prince', 18, 1200.0000, 'CSE');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reviews`
--

CREATE TABLE `tbl_reviews` (
  `rid` int NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `rating` enum('*','**','***','****','*****') DEFAULT NULL,
  `added_date_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_appointment`
--
ALTER TABLE `tbl_appointment`
  ADD PRIMARY KEY (`apid`);

--
-- Indexes for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  ADD PRIMARY KEY (`empid`),
  ADD UNIQUE KEY `email` (`email`,`mobile`),
  ADD UNIQUE KEY `email_2` (`email`,`mobile`);

--
-- Indexes for table `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  ADD PRIMARY KEY (`rid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_appointment`
--
ALTER TABLE `tbl_appointment`
  MODIFY `apid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  MODIFY `empid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  MODIFY `rid` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

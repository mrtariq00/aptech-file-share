-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Database: `sschool`
--

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------
-- Table structure for table `course`
-- --------------------------------------------------------

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sdate` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `course` (`id`, `name`, `sdate`) VALUES
(1, 'Mathematics Basics', '2025-11-03'),
(2, 'Web Development Fundamentals', '2025-12-20');

-- --------------------------------------------------------
-- Table structure for table `teacher`
-- --------------------------------------------------------

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `salary` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `teacher` (`id`, `name`, `email`, `salary`) VALUES
(1, 'Kamran', 'kamran@schoolmail.com', 52000),
(2, 'Farah', 'farah@schoolmail.com', 61000),
(3, 'Naveed', 'naveed@schoolmail.com', 59000);

-- --------------------------------------------------------
-- Table structure for table `student`
-- --------------------------------------------------------

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `student` (`id`, `name`, `email`, `cid`, `tid`) VALUES
(1, 'Bilal', 'bilal@schoolmail.com', 1, 1),
(2, 'Ayesha', 'ayesha@schoolmail.com', 2, 2),
(3, 'Hassan', 'hassan@schoolmail.com', 1, 3),
(4, 'Fatima', 'fatima@schoolmail.com', 2, 1),
(5, 'Imran', 'imran@schoolmail.com', 1, 2),
(6, 'Nida', 'nida@schoolmail.com', 2, 3);

-- Indexes for tables
ALTER TABLE `course` ADD PRIMARY KEY (`id`);
ALTER TABLE `teacher` ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email` (`email`);
ALTER TABLE `student` ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `email` (`email`);

ALTER TABLE `course` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE `teacher` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE `student` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

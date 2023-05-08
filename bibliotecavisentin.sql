-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Mag 08, 2023 alle 10:14
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bibliotecavisentin`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `tAddetto`
--

CREATE TABLE `tAddetto` (
  `id` int(11) NOT NULL,
  `idBiblioteca` int(11) NOT NULL,
  `nomeUtente` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tAddetto`
--

INSERT INTO `tAddetto` (`id`, `idBiblioteca`, `nomeUtente`, `password`) VALUES
(1, 1, 'enrico', 'ciao123'),
(2, 2, 'pippo', 'ciao123'),
(3, 3, 'pluto', 'ciao123'),
(4, 4, 'jimmy', 'ciao123'),
(5, 5, 'sciardis', 'ciao123');

-- --------------------------------------------------------

--
-- Struttura della tabella `tArmadio`
--

CREATE TABLE `tArmadio` (
  `id` int(11) NOT NULL,
  `idStanza` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tArmadio`
--

INSERT INTO `tArmadio` (`id`, `idStanza`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 3),
(10, 4),
(11, 4),
(12, 4),
(13, 5),
(14, 5),
(15, 5),
(16, 6),
(17, 6),
(18, 6),
(19, 7),
(20, 7),
(21, 7),
(22, 8),
(23, 8),
(24, 8),
(25, 9),
(26, 9),
(27, 9),
(28, 10),
(29, 10),
(30, 10),
(31, 11),
(32, 11),
(33, 11),
(34, 12),
(35, 12),
(36, 12),
(37, 13),
(38, 13),
(39, 13),
(40, 14),
(41, 14),
(42, 14),
(43, 15),
(44, 15),
(45, 15);

-- --------------------------------------------------------

--
-- Struttura della tabella `tAutore`
--

CREATE TABLE `tAutore` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tAutore`
--

INSERT INTO `tAutore` (`id`, `nome`, `cognome`) VALUES
(1, 'Italo', 'Calvino'),
(2, 'Gabriel', 'García Márquez'),
(3, 'Albert', 'Camus'),
(4, 'Jorge Luis', 'Borges'),
(5, 'Haruki', 'Murakami'),
(6, 'Friedrich', 'Nietzsche'),
(7, 'Ernest', 'Hemingway'),
(8, 'Virginia', 'Woolf'),
(9, 'Franz', 'Kafka'),
(10, 'James', 'Joyce'),
(11, 'Aldous', 'Huxley'),
(12, 'Toni', 'Morrison'),
(13, 'Margaret', 'Atwood'),
(14, 'Marcel', 'Proust'),
(15, 'Hermann', 'Hesse'),
(16, 'Elena', 'Ferrante'),
(17, 'Giovanni', 'Verga'),
(18, 'Umberto', 'Eco'),
(19, 'Lev', 'Tolstoj'),
(20, 'Fëdor', 'Dostoevskij');

-- --------------------------------------------------------

--
-- Struttura della tabella `tBiblioteca`
--

CREATE TABLE `tBiblioteca` (
  `id` int(11) NOT NULL,
  `latitudine` double NOT NULL,
  `longitudine` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tBiblioteca`
--

INSERT INTO `tBiblioteca` (`id`, `latitudine`, `longitudine`) VALUES
(1, 41.902782, 12.496366),
(2, 38.115687, 13.366757),
(3, 41.10743, 16.86506),
(4, 45.6495264, 13.7768182),
(5, 45.464203, 9.189982);

-- --------------------------------------------------------

--
-- Struttura della tabella `tCasaEditrice`
--

CREATE TABLE `tCasaEditrice` (
  `id` int(11) NOT NULL,
  `nomeCasaEditrice` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tCasaEditrice`
--

INSERT INTO `tCasaEditrice` (`id`, `nomeCasaEditrice`) VALUES
(1, 'Mondadori'),
(2, 'Einaudi'),
(3, 'Feltrinelli'),
(4, 'Rizzoli'),
(5, 'Garzanti'),
(6, 'Adelphi'),
(7, 'Bompiani'),
(8, 'Laterza'),
(9, 'Newton Compton'),
(10, 'Marsilio'),
(11, 'Giunti'),
(12, 'Sellerio'),
(13, 'Marsilio Editori'),
(14, 'RCS Libri'),
(15, 'De Agostini');

-- --------------------------------------------------------

--
-- Struttura della tabella `tNumeroTelefono`
--

CREATE TABLE `tNumeroTelefono` (
  `id` int(11) NOT NULL,
  `idUtente` int(11) NOT NULL,
  `telefono` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tOpera`
--

CREATE TABLE `tOpera` (
  `id` int(11) NOT NULL,
  `idScaffale` int(11) NOT NULL,
  `titolo` varchar(50) NOT NULL,
  `isbn` varchar(50) NOT NULL,
  `dataPubblicazione` date NOT NULL,
  `annoRiferimento` date DEFAULT NULL,
  `numeroVolume` int(11) DEFAULT NULL,
  `idTipologia` int(11) NOT NULL,
  `idCasaEditrice` int(11) NOT NULL,
  `idEnciclopedia` int(11) DEFAULT NULL,
  `genere` varchar(50) NOT NULL,
  `numeroProgressivo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tPrenotazione`
--

CREATE TABLE `tPrenotazione` (
  `id` int(11) NOT NULL,
  `idOpera` int(11) NOT NULL,
  `idUtente` int(11) NOT NULL,
  `dataPrenotazione` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tPrestito`
--

CREATE TABLE `tPrestito` (
  `id` int(11) NOT NULL,
  `idAddetto` int(11) NOT NULL,
  `idPrenotazione` int(11) NOT NULL,
  `dataPrestito` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tRitiro`
--

CREATE TABLE `tRitiro` (
  `id` int(11) NOT NULL,
  `idAddetto` int(11) NOT NULL,
  `idPrestito` int(11) NOT NULL,
  `dataRitiro` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tScaffale`
--

CREATE TABLE `tScaffale` (
  `id` int(11) NOT NULL,
  `idArmadio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tScaffale`
--

INSERT INTO `tScaffale` (`id`, `idArmadio`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 3),
(10, 4),
(11, 4),
(12, 4),
(13, 5),
(14, 5),
(15, 5),
(16, 6),
(17, 6),
(18, 6),
(19, 7),
(20, 7),
(21, 7),
(22, 8),
(23, 8),
(24, 8),
(25, 9),
(26, 9),
(27, 9),
(28, 10),
(29, 10),
(30, 10),
(31, 11),
(32, 11),
(33, 11),
(34, 12),
(35, 12),
(36, 12),
(37, 13),
(38, 13),
(39, 13),
(40, 14),
(41, 14),
(42, 14),
(43, 15),
(44, 15),
(45, 15),
(46, 16),
(47, 16),
(48, 16),
(49, 17),
(50, 17),
(51, 17),
(52, 18),
(53, 18),
(54, 18),
(55, 19),
(56, 19),
(57, 19),
(58, 20),
(59, 20),
(60, 20),
(61, 21),
(62, 21),
(63, 21),
(64, 22),
(65, 22),
(66, 22),
(67, 23),
(68, 23),
(69, 23),
(70, 24),
(71, 24),
(72, 24),
(73, 25),
(74, 25),
(75, 25),
(76, 26),
(77, 26),
(78, 26),
(79, 27),
(80, 27),
(81, 27),
(82, 28),
(83, 28),
(84, 28),
(85, 29),
(86, 29),
(87, 29),
(88, 30),
(89, 30),
(90, 30),
(91, 31),
(92, 31),
(93, 31),
(94, 32),
(95, 32),
(96, 32),
(97, 33),
(98, 33),
(99, 33),
(100, 34),
(101, 34),
(102, 34),
(103, 35),
(104, 35),
(105, 35),
(106, 36),
(107, 36),
(108, 36),
(109, 37),
(110, 37),
(111, 37),
(112, 38),
(113, 38),
(114, 38),
(115, 39),
(116, 39),
(117, 39),
(118, 40),
(119, 40),
(120, 40),
(121, 41),
(122, 41),
(123, 41),
(124, 42),
(125, 42),
(126, 42),
(127, 43),
(128, 43),
(129, 43),
(130, 44),
(131, 44),
(132, 44),
(133, 45),
(134, 45),
(135, 45);

-- --------------------------------------------------------

--
-- Struttura della tabella `tScrittura`
--

CREATE TABLE `tScrittura` (
  `id` int(11) NOT NULL,
  `idOpera` int(11) NOT NULL,
  `idAutore` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tStanza`
--

CREATE TABLE `tStanza` (
  `id` int(11) NOT NULL,
  `idBiblioteca` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tStanza`
--

INSERT INTO `tStanza` (`id`, `idBiblioteca`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 2),
(5, 2),
(6, 2),
(7, 3),
(8, 3),
(9, 3),
(10, 4),
(11, 4),
(12, 4),
(13, 5),
(14, 5),
(15, 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `tTipologia`
--

CREATE TABLE `tTipologia` (
  `id` int(11) NOT NULL,
  `nomeTipologia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tTipologia`
--

INSERT INTO `tTipologia` (`id`, `nomeTipologia`) VALUES
(1, 'Narrativa'),
(2, 'Poesia'),
(3, 'Romanzo storico'),
(4, 'Giallo'),
(5, 'Fantascienza'),
(6, 'Saggio'),
(7, 'Biografia'),
(8, 'Autobiografia'),
(9, 'Teatro'),
(10, 'Commedia');

-- --------------------------------------------------------

--
-- Struttura della tabella `tUtente`
--

CREATE TABLE `tUtente` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `codiceFiscale` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nomeUtente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `tAddetto`
--
ALTER TABLE `tAddetto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idBiblioteca` (`idBiblioteca`);

--
-- Indici per le tabelle `tArmadio`
--
ALTER TABLE `tArmadio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idStanza` (`idStanza`);

--
-- Indici per le tabelle `tAutore`
--
ALTER TABLE `tAutore`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tBiblioteca`
--
ALTER TABLE `tBiblioteca`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tCasaEditrice`
--
ALTER TABLE `tCasaEditrice`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tNumeroTelefono`
--
ALTER TABLE `tNumeroTelefono`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD KEY `idUtente` (`idUtente`);

--
-- Indici per le tabelle `tOpera`
--
ALTER TABLE `tOpera`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `isbn` (`isbn`),
  ADD KEY `idScaffale` (`idScaffale`);

--
-- Indici per le tabelle `tPrenotazione`
--
ALTER TABLE `tPrenotazione`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idOpera` (`idOpera`),
  ADD KEY `idUtente` (`idUtente`);

--
-- Indici per le tabelle `tPrestito`
--
ALTER TABLE `tPrestito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAddetto` (`idAddetto`),
  ADD KEY `idPrenotazione` (`idPrenotazione`);

--
-- Indici per le tabelle `tRitiro`
--
ALTER TABLE `tRitiro`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAddetto` (`idAddetto`),
  ADD KEY `idPrestito` (`idPrestito`);

--
-- Indici per le tabelle `tScaffale`
--
ALTER TABLE `tScaffale`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idArmadio` (`idArmadio`);

--
-- Indici per le tabelle `tScrittura`
--
ALTER TABLE `tScrittura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idOpera` (`idOpera`),
  ADD KEY `idAutore` (`idAutore`);

--
-- Indici per le tabelle `tStanza`
--
ALTER TABLE `tStanza`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idBiblioteca` (`idBiblioteca`);

--
-- Indici per le tabelle `tTipologia`
--
ALTER TABLE `tTipologia`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tUtente`
--
ALTER TABLE `tUtente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codiceFiscale` (`codiceFiscale`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `nomeUtente` (`nomeUtente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `tAddetto`
--
ALTER TABLE `tAddetto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `tArmadio`
--
ALTER TABLE `tArmadio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT per la tabella `tAutore`
--
ALTER TABLE `tAutore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT per la tabella `tBiblioteca`
--
ALTER TABLE `tBiblioteca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `tCasaEditrice`
--
ALTER TABLE `tCasaEditrice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la tabella `tNumeroTelefono`
--
ALTER TABLE `tNumeroTelefono`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tOpera`
--
ALTER TABLE `tOpera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tPrenotazione`
--
ALTER TABLE `tPrenotazione`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tPrestito`
--
ALTER TABLE `tPrestito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tRitiro`
--
ALTER TABLE `tRitiro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tScaffale`
--
ALTER TABLE `tScaffale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT per la tabella `tScrittura`
--
ALTER TABLE `tScrittura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tStanza`
--
ALTER TABLE `tStanza`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la tabella `tTipologia`
--
ALTER TABLE `tTipologia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `tUtente`
--
ALTER TABLE `tUtente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `tAddetto`
--
ALTER TABLE `tAddetto`
  ADD CONSTRAINT `taddetto_ibfk_1` FOREIGN KEY (`idBiblioteca`) REFERENCES `tBiblioteca` (`id`);

--
-- Limiti per la tabella `tArmadio`
--
ALTER TABLE `tArmadio`
  ADD CONSTRAINT `tarmadio_ibfk_1` FOREIGN KEY (`idStanza`) REFERENCES `tStanza` (`id`);

--
-- Limiti per la tabella `tNumeroTelefono`
--
ALTER TABLE `tNumeroTelefono`
  ADD CONSTRAINT `tnumerotelefono_ibfk_1` FOREIGN KEY (`idUtente`) REFERENCES `tUtente` (`id`);

--
-- Limiti per la tabella `tOpera`
--
ALTER TABLE `tOpera`
  ADD CONSTRAINT `topera_ibfk_1` FOREIGN KEY (`idScaffale`) REFERENCES `tScaffale` (`id`);

--
-- Limiti per la tabella `tPrenotazione`
--
ALTER TABLE `tPrenotazione`
  ADD CONSTRAINT `tprenotazione_ibfk_1` FOREIGN KEY (`idOpera`) REFERENCES `tOpera` (`id`),
  ADD CONSTRAINT `tprenotazione_ibfk_2` FOREIGN KEY (`idUtente`) REFERENCES `tUtente` (`id`);

--
-- Limiti per la tabella `tPrestito`
--
ALTER TABLE `tPrestito`
  ADD CONSTRAINT `tprestito_ibfk_1` FOREIGN KEY (`idAddetto`) REFERENCES `tAddetto` (`id`),
  ADD CONSTRAINT `tprestito_ibfk_2` FOREIGN KEY (`idPrenotazione`) REFERENCES `tPrenotazione` (`id`);

--
-- Limiti per la tabella `tRitiro`
--
ALTER TABLE `tRitiro`
  ADD CONSTRAINT `tritiro_ibfk_1` FOREIGN KEY (`idAddetto`) REFERENCES `tAddetto` (`id`),
  ADD CONSTRAINT `tritiro_ibfk_2` FOREIGN KEY (`idPrestito`) REFERENCES `tPrestito` (`id`);

--
-- Limiti per la tabella `tScaffale`
--
ALTER TABLE `tScaffale`
  ADD CONSTRAINT `tscaffale_ibfk_1` FOREIGN KEY (`idArmadio`) REFERENCES `tArmadio` (`id`);

--
-- Limiti per la tabella `tScrittura`
--
ALTER TABLE `tScrittura`
  ADD CONSTRAINT `tscrittura_ibfk_1` FOREIGN KEY (`idOpera`) REFERENCES `tOpera` (`id`),
  ADD CONSTRAINT `tscrittura_ibfk_2` FOREIGN KEY (`idAutore`) REFERENCES `tAutore` (`id`);

--
-- Limiti per la tabella `tStanza`
--
ALTER TABLE `tStanza`
  ADD CONSTRAINT `tstanza_ibfk_1` FOREIGN KEY (`idBiblioteca`) REFERENCES `tBiblioteca` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Mag 17, 2023 alle 18:50
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
-- Struttura della tabella `tEnciclopedia`
--

CREATE TABLE `tEnciclopedia` (
  `id` int(11) NOT NULL,
  `isbn` varchar(50) NOT NULL,
  `titolo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tEnciclopedia`
--

INSERT INTO `tEnciclopedia` (`id`, `isbn`, `titolo`) VALUES
(1, '9788806145040', 'Il Signore degli Anelli'),
(2, '9780747532743', 'Harry Potter'),
(3, '9788806143893', 'Cronache del ghiaccio e del fuoco'),
(4, '9788804664659', 'La ruota del tempo'),
(5, '9788807030925', 'Le Cronache di Narnia'),
(6, '9788845271237', 'La Torre Nera'),
(7, '9788804625780', 'La Saga di Dune'),
(8, '9788804665441', 'La Trilogia della Fondazione'),
(9, '9788804346849', 'La Tetralogia di Hitchhiker\'s Guide'),
(10, '9788806208449', 'Le Cronache di Amber');

-- --------------------------------------------------------

--
-- Struttura della tabella `tNumeroTelefono`
--

CREATE TABLE `tNumeroTelefono` (
  `id` int(11) NOT NULL,
  `idUtente` int(11) NOT NULL,
  `telefono` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tNumeroTelefono`
--

INSERT INTO `tNumeroTelefono` (`id`, `idUtente`, `telefono`) VALUES
(2, 3, '443435353'),
(3, 3, '534535'),
(4, 3, '4354353');

-- --------------------------------------------------------

--
-- Struttura della tabella `tOpera`
--

CREATE TABLE `tOpera` (
  `id` int(11) NOT NULL,
  `titolo` varchar(50) NOT NULL,
  `isbn` varchar(100) NOT NULL,
  `dataPubblicazione` date NOT NULL,
  `idEnciclopedia` int(11) DEFAULT NULL,
  `dataRiferimento` date DEFAULT NULL,
  `idScaffale` int(11) NOT NULL,
  `numeroVolume` int(11) DEFAULT NULL,
  `idCasaEditrice` int(11) NOT NULL,
  `numeroProgressivo` int(11) NOT NULL,
  `copertina` varchar(100) NOT NULL,
  `idTipologia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tOpera`
--

INSERT INTO `tOpera` (`id`, `titolo`, `isbn`, `dataPubblicazione`, `idEnciclopedia`, `dataRiferimento`, `idScaffale`, `numeroVolume`, `idCasaEditrice`, `numeroProgressivo`, `copertina`, `idTipologia`) VALUES
(1, 'Hunger games', '9325468771', '2000-10-21', NULL, NULL, 2, NULL, 4, 1, '/images/book-images/hunger-games.jpeg', 1),
(2, 'La strada', '0241392364', '2001-12-11', NULL, NULL, 65, NULL, 7, 1, '/images/book-images/la-strada.jpeg', 1),
(3, 'Il nuovo mondo', '8889337505', '2010-02-07', NULL, NULL, 32, NULL, 1, 1, '/images/book-images/il-nuovo-mondo.jpeg', 1),
(4, '1984', '0553497783', '1948-01-05', NULL, NULL, 44, NULL, 9, 1, '/images/book-images/1984.jpeg', 1),
(5, 'Noi', '9788884868106', '2023-10-01', NULL, NULL, 31, NULL, 10, 1, '/images/book-images/noi.jpeg', 1),
(6, 'Vox', '7659201782', '1988-08-10', NULL, NULL, 44, NULL, 3, 2, '/images/book-images/vox.jpeg', 1),
(7, 'Cecità', '0132139318', '2001-12-11', NULL, NULL, 100, NULL, 5, 1, '/images/book-images/cecita.jpeg', 1),
(8, 'Battle Royale', '8469873198', '1977-10-30', NULL, NULL, 111, NULL, 4, 1, '/images/book-images/battle-royale.jpeg', 1),
(9, 'Anna', '9788817104567', '2010-05-27', NULL, NULL, 120, NULL, 3, 1, '/images/book-images/anna.jpeg', 1),
(10, 'Il labirinto', '543536363', '2020-02-20', NULL, NULL, 82, NULL, 8, 1, '/images/book-images/il-labirinto.jpeg', 1),
(14, 'La Compagnia dell\'Anello', '485430585', '2000-10-02', 1, NULL, 43, 1, 5, 1, '/images/book-images/la-compagnia-dell-anello.jpeg', 2),
(15, 'Le Due Torri', '9584353458', '2001-02-21', 1, NULL, 98, 2, 9, 1, '/images/book-images/le-due-torri.jpg', 2),
(16, 'Il Ritorno del Re', '304954953', '2002-01-22', 1, NULL, 123, 3, 2, 1, '/images/book-images/il-ritorno-del-re.jpeg', 2),
(17, 'Harry Potter e la Pietra Filosofale', '9788804624301', '1997-06-26', 2, NULL, 125, 1, 2, 1, '/images/book-images/pietra-filosofale.jpeg', 2),
(18, 'Harry Potter e la Camera dei Segreti', '9788804627647', '1998-07-02', 2, NULL, 12, 2, 9, 1, '/images/book-images/camera-dei-segreti.jpeg', 2),
(19, 'Harry Potter e il Prigioniero di Azkaban', '9788804630449', '1999-07-08', 2, NULL, 5, 3, 6, 1, '/images/book-images/prigioniero-di-azkaban.jpeg', 2),
(20, 'Harry Potter e il Calice di Fuoco', '9788804631354', '2000-07-08', 2, NULL, 108, 4, 4, 1, '/images/book-images/calice-di-fuoco.jpeg', 2),
(21, 'Harry Potter e l Ordine della Fenice', '9788804632603', '2003-06-21', 2, NULL, 52, 5, 9, 1, '/images/book-images/ordine-della-fenice.jpeg', 2),
(22, 'Harry Potter e il Principe Mezzosangue', '9788804633600', '2005-07-16', 2, NULL, 14, 6, 10, 1, '/images/book-images/principe-mezzosangue.jpeg', 2),
(23, 'Harry Potter e i Doni della Morte', '9788804634232', '2007-07-21', 2, NULL, 47, 7, 10, 1, '/images/book-images/doni-della-morte.jpeg', 2),
(24, 'Atlas of the World', '9780190902704', '2020-01-01', NULL, '2022-04-01', 42, NULL, 3, 1, '/images/book-images/atlas-of-the-world.jpeg', 3),
(25, 'National Geographic World Atlas', '9781426208387', '2011-10-18', NULL, '2022-02-20', 55, NULL, 1, 1, '/images/book-images/national-geographic-world-atlas.jpeg', 3),
(26, 'Rand McNally World Atlas', '9780528017894', '2019-05-15', NULL, '2022-03-10', 71, NULL, 6, 1, '/images/book-images/rand-mcnally-world-atlas.jpeg', 3),
(27, 'The Times Comprehensive Atlas of the World', '9780008302787', '2019-09-05', NULL, '2022-05-12', 27, NULL, 4, 1, '/images/book-images/the-times-comprehensive-atlas-of-the-world.jpeg', 3),
(28, 'World Political Map laminated', '9781465459655', '2017-01-17', NULL, '2022-01-15', 89, NULL, 10, 1, '/images/book-images/world-political-map-laminated.jpeg', 3),
(29, 'World Physical Map', '9780008211560', '2019-07-11', NULL, '2022-04-23', 102, NULL, 2, 1, '/images/book-images/world-physical-map.jpeg', 3),
(30, 'World Classic Wall Map', '9781780054609', '2015-09-15', NULL, '2022-06-05', 17, NULL, 7, 1, '/images/book-images/world-classic-wall-map.jpeg', 3),
(31, 'World Antique Ocean Wall Map', '9780789213470', '2018-08-07', NULL, '2022-03-01', 123, NULL, 9, 1, '/images/book-images/world-anique-ocean-wall-map.jpeg', 3),
(32, 'World Scratch Off Map', '9781910690219', '2015-07-01', NULL, '2022-05-20', 66, NULL, 8, 1, '/images/book-images/world-scratch-off-map.webp', 3),
(33, 'World Satellite Wall Map', '9781859972501', '2006-02-15', NULL, '2022-02-10', 30, NULL, 5, 1, '/images/book-images/world-satellite-wall-map.webp', 3);

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

--
-- Dump dei dati per la tabella `tScrittura`
--

INSERT INTO `tScrittura` (`id`, `idOpera`, `idAutore`) VALUES
(55, 1, 1),
(56, 2, 2),
(57, 3, 3),
(58, 4, 4),
(59, 5, 5),
(60, 6, 6),
(61, 7, 7),
(62, 8, 8),
(63, 9, 9),
(64, 10, 10),
(65, 15, 11),
(66, 24, 12),
(67, 33, 13),
(68, 14, 14),
(69, 15, 15),
(70, 16, 16),
(71, 17, 17),
(72, 18, 18),
(73, 19, 19),
(74, 20, 20),
(75, 21, 1),
(76, 22, 2),
(77, 23, 3),
(78, 24, 4),
(79, 25, 5),
(80, 26, 6),
(81, 27, 7),
(82, 28, 8),
(83, 29, 9),
(84, 30, 10),
(85, 31, 11),
(86, 32, 12),
(87, 33, 13),
(88, 1, 14),
(89, 2, 15),
(90, 3, 16),
(91, 8, 17),
(92, 10, 18),
(93, 21, 19);

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
(1, 'Libro'),
(2, 'Volume'),
(3, 'Carta geo-politica');

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
-- Dump dei dati per la tabella `tUtente`
--

INSERT INTO `tUtente` (`id`, `nome`, `cognome`, `codiceFiscale`, `email`, `password`, `nomeUtente`) VALUES
(3, 'Enrico', 'Visentin', 'iJCNDN', 'enrico@ciao.com', 'ciao123', 'enri');

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
-- Indici per le tabelle `tEnciclopedia`
--
ALTER TABLE `tEnciclopedia`
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
  ADD KEY `idScaffale` (`idScaffale`),
  ADD KEY `idCasaEditrice` (`idCasaEditrice`),
  ADD KEY `idEnciclopedia` (`idEnciclopedia`),
  ADD KEY `idTipologia` (`idTipologia`);

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
-- AUTO_INCREMENT per la tabella `tEnciclopedia`
--
ALTER TABLE `tEnciclopedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT per la tabella `tNumeroTelefono`
--
ALTER TABLE `tNumeroTelefono`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `tOpera`
--
ALTER TABLE `tOpera`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `topera_ibfk_1` FOREIGN KEY (`idScaffale`) REFERENCES `tScaffale` (`id`),
  ADD CONSTRAINT `topera_ibfk_2` FOREIGN KEY (`idCasaEditrice`) REFERENCES `tCasaEditrice` (`id`),
  ADD CONSTRAINT `topera_ibfk_3` FOREIGN KEY (`idEnciclopedia`) REFERENCES `tEnciclopedia` (`id`),
  ADD CONSTRAINT `topera_ibfk_4` FOREIGN KEY (`idTipologia`) REFERENCES `tTipologia` (`id`);

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

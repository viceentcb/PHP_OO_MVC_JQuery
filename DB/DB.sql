

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

create database joyas;
use joyas;

CREATE TABLE joya (
  cod_ref varchar(50) NOT NULL,
  tipo varchar(50) NOT NULL,
  nombre varchar(50) NOT NULL,
  oro varchar(50) NOT NULL,
  gema varchar(50) NOT NULL,
  diametro varchar(50) NOT NULL,
  forma varchar(50) NOT NULL,
  PRIMARY KEY (cod_ref)
) 
ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `joya` (`cod_ref`, `tipo`,  `nombre`, `oro`, `gema`, `diametro`, `forma`) VALUES
('A123','reloj', 'rolex_submariner', 'rosado', 'diamante', '16', 'circular'),
('A145', 'anillo','montblanc_star', 'puro', 'zafiro', '20', 'cuadrada'),
('A879', 'pulsera','seiko_astron', 'blanco', 'rubi', '19', 'sport');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

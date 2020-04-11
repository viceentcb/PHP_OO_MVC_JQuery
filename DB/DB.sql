-- TABLA DEL CARRITO

-- CREATE TABLE `cart` (
--   `cod_ref` varchar(50) DEFAULT NULL,
--   `id` varchar(50) DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

-----------------------------------------------------

--TABLA DE CUPONES PARA LOS USUARIOS

-- CREATE TABLE `coupon` (
--   `user_name` varchar(50) DEFAULT NULL,
--   `coupon` varchar(50) DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

-----------------------------------------------------

--TABLA PARA LOS GIFS DE TIPO DE JOYA EN EL HOME

-- CREATE TABLE `gif` (
--   `route` varchar(50) NOT NULL,
--   `categoria` varchar(50) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

------------------------------------------------------

--TABLA DE FACTURAS

-- CREATE TABLE `invoice` (
--   `cod_invoice` int(50) NOT NULL AUTO_INCREMENT,
--   `user_name` varchar(50) DEFAULT NULL,
--   `price` varchar(50) DEFAULT NULL,
--   `date` varchar(50) DEFAULT NULL,
--   PRIMARY KEY (`cod_invoice`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=latin1



-- TRIGGER DE INVOICE PARA GUARDAR LOS DATOS DE LA FACTURA EN HIST_INVOICE

-- create trigger hist_invoice_AI after insert on invoice for each row
-- 	insert into hist_invoice values (new.cod_invoice, new.user_name, new.price, new.date)
    


--TABLA HISTORIAL DE FACTURAS

-- CREATE TABLE `hist_invoice` (
--   `cod_invoice` int(50) NOT NULL DEFAULT '0',
--   `user_name` varchar(50) DEFAULT NULL,
--   `price` varchar(50) DEFAULT NULL,
--   `date` varchar(50) DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

-------------------------------------------------------

--TABLA DE LINEAS DE LAS FACTURAS CON CLAVE AJENA DE EL CODIGO DE FACTURAS

-- CREATE TABLE `invoice_line` (
--   `cod_line` int(50) NOT NULL AUTO_INCREMENT,
--   `user_name` varchar(50) DEFAULT NULL,
--   `cod_ref` varchar(50) DEFAULT NULL,
--   `units` int(50) DEFAULT NULL,
--   `price` int(50) DEFAULT NULL,
--   `date` varchar(50) DEFAULT NULL,
--   `cod_invoice` int(50) DEFAULT NULL,
--   PRIMARY KEY (`cod_line`),
--   KEY `fk1` (`cod_invoice`),
--   CONSTRAINT `fk1` FOREIGN KEY (`cod_invoice`) REFERENCES `invoice` (`cod_invoice`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1



-- TRIGGER DE INVOICE_LINE PARA GUARDAR LOS DATOS DE LAS LINEAS DE LA FACTURA EN HIST_INVOICE_LINE

-- create trigger hist_invoice_line_AI after insert on invoice_line for each row
-- 	insert into hist_invoice_line values (new.cod_line, new.user_name, new.cod_ref, new.units, new.price, new.date, new.cod_invoice)



--TABLA HISTORIAL DE LINEAS DE FACTURAS

-- CREATE TABLE `hist_invoice_line` (
--   `cod_line` int(50) NOT NULL DEFAULT '0',
--   `user_name` varchar(50) DEFAULT NULL,
--   `cod_ref` varchar(50) DEFAULT NULL,
--   `units` int(50) DEFAULT NULL,
--   `price` int(50) DEFAULT NULL,
--   `date` varchar(50) DEFAULT NULL,
--   `cod_invoice` int(50) DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

---------------------------------------------------------------------

--TABLA DE JOYAS

-- CREATE TABLE `joya` (
--   `cod_ref` varchar(50) NOT NULL,
--   `tipo` varchar(50) NOT NULL,
--   `nombre` varchar(50) NOT NULL,
--   `oro` varchar(50) NOT NULL,
--   `gema` varchar(50) NOT NULL,
--   `diametro` varchar(50) NOT NULL,
--   `forma` varchar(50) NOT NULL,
--   `val` varchar(50) DEFAULT NULL,
--   `route` varchar(100) DEFAULT NULL,
--   `precio` int(50) DEFAULT NULL,
--   `marca` varchar(50) DEFAULT NULL,
--   `unidades` int(50) DEFAULT NULL,
--   `views` int(11) DEFAULT NULL,
--   `descripcion` varchar(300) DEFAULT NULL,
--   PRIMARY KEY (`cod_ref`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

--------------------------------------------------

--TABLA DE LOS LIKES DE LOS USUARIOS

-- CREATE TABLE `likes` (
--   `cod_ref` varchar(50) NOT NULL,
--   `user_name` varchar(50) NOT NULL,
--   PRIMARY KEY (`cod_ref`,`user_name`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1


---------------------------------------------

--TABLA DE LAS FOTOS DEL SLIDER

-- CREATE TABLE `photos` (
--   `route` varchar(100) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

----------------------------------------------

--TABLA QUE RELACIONA CADA PRODUCTO CON SU TIENDA

-- CREATE TABLE `prod_tienda` (
--   `cod_tienda` varchar(50) DEFAULT NULL,
--   `cod_ref` varchar(50) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

-----------------------------------------------

-- TABLA DE LAS TIENDAS

-- CREATE TABLE `tiendas` (
--   `tienda` varchar(100) DEFAULT NULL,
--   `lat` varchar(100) DEFAULT NULL,
--   `lng` varchar(100) DEFAULT NULL,
--   `descripcion` varchar(1000) DEFAULT NULL,
--   `cod_tienda` varchar(50) DEFAULT NULL,
--   `lugar` varchar(50) DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

--------------------------------------------

--TABLA DE LOS USUARIOS

-- CREATE TABLE `users` (
--   `user_name` varchar(50) NOT NULL,
--   `password` varchar(200) DEFAULT NULL,
--   `mail` varchar(50) DEFAULT NULL,
--   `avatar` varchar(200) DEFAULT NULL,
--   `type` varchar(50) DEFAULT 'client',
--   `points` varchar(100) DEFAULT NULL,
--   PRIMARY KEY (`user_name`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1



-- TRIGGER DE USERS PARA GUARDARLOS EN EL HIST_USERS

-- create trigger hist_users_AI after insert on user for each row
-- insert into hist_users value (new.user_name, new.password, new.mail, new.avatar, new.type)



--TABLA HISTORIAL DE USUARIOS

-- CREATE TABLE `hist_users` (
--   `user_name` varchar(50) NOT NULL,
--   `password` varchar(200) DEFAULT NULL,
--   `mail` varchar(50) DEFAULT NULL,
--   `avatar` varchar(200) DEFAULT NULL,
--   `type` varchar(50) DEFAULT 'client'
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1

----------------------------------------------------------------


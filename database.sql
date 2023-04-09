DROP DATABASE IF EXISTS ControleClientes;
CREATE DATABASE ControleClientes;
USE ControleClientes;

CREATE TABLE Tutores (
  cod_tutor         INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  nome		  		    VARCHAR(100) NOT NULL,
  sobrenome		  		VARCHAR(100) NOT NULL,
  telefone		      VARCHAR(100) NOT NULL,
  endereco		      VARCHAR(100) NOT NULL
) engine = InnoDB;

CREATE TABLE Pets (
  cod_pet           INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  nome		  		    VARCHAR(100) NOT NULL,
  raca              VARCHAR(100) NOT NULL,
  data_nascimento   VARCHAR(100) NOT NULL,
  cod_tutor         INT NOT NULL,

  FOREIGN KEY (cod_tutor) REFERENCES Tutores(cod_tutor)

) engine = InnoDB;

CREATE TABLE Servicos (
  cod_servico         INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  nome_servico        VARCHAR(100) NOT NULL

) engine = InnoDB;

CREATE TABLE Entradas (
  id_entrada			    INT UNIQUE PRIMARY KEY AUTO_INCREMENT,
  cod_tutor           INT NOT NULL,
  cod_servico         INT NOT NULL,
  valor_entrada       DECIMAL(5,2) NOT NULL,

  FOREIGN KEY (cod_tutor) REFERENCES Tutores(cod_tutor),
  FOREIGN KEY (cod_servico) REFERENCES Servicos(cod_servico)
) engine = InnoDB;


INSERT INTO Tutores (nome, sobrenome, telefone, endereco) 
VALUES
('Renata', 'Andrade', '(41)9288-4416', 'Rua Carlos Setim, n° 59 - Afonso Pena - São José dos Pinhais'),
('Beatriz', 'Nery', '(41)9288-4416', 'Rua Arnaldo Damasceno Vieira, n°  - Pavuna - Rio de Janeiro'),
('Raphael', 'Nery', '(41)9288-4416', 'Rua Arnaldo Damasceno Vieira, n°  - Pavuna - Rio de Janeiro'),
('Dudy', '(41)9288-4416', 'Rua Carlos Setim, n° 59 - Afonso Pena - São José dos Pinhais'),
('Roberto', 'Carlos', '(41)9288-4416', 'Rua Carlos Setim, n° 59 - Afonso Pena - São José dos Pinhais');

INSERT INTO Pets (nome, raca, data_nascimento, cod_tutor)
VALUES
('Milly', 'Poodle', '12/02/2022', 1),
('Atena', 'Pastor Alemão', '12/02/2022', 2),
('Dhru', 'Whipet', '12/02/2022', 3),
('Shiva', 'Beagle', '12/02/2022', 1),
('Luna', 'SRD', '12/02/2022', 4),
('Luly', 'SRD', '12/02/2022', 5);

INSERT INTO Servicos (nome_servico) 
VALUES
('Adestramento'),
('Monitoria'),
('PetSitter'),
('Dog Walk');

INSERT INTO Entradas(cod_tutor, cod_servico, valor_entrada)
VALUES
(2, 1, 40.00),
(1, 2, 35.00),
(3, 3, 10.00),
(4, 1, 40.00),
(5, 1, 40.00),
(1, 2, 35.00),
(5, 3, 10.00),
(4, 1, 40.00),
(2, 4, 25.00),
(3, 2, 35.00);
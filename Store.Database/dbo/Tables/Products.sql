CREATE TABLE [dbo].[Products] (
    [ProductId] INT             IDENTITY (1, 1) NOT NULL,
    [Price]     DECIMAL (18, 2) NOT NULL,
    [Name]      NVARCHAR (250)  NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([ProductId] ASC)
);


﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAppAngularUdemy.Classes
{
    public class ProductCLS
    {
        public int IdProduct { get; set; }

        public string ProductName { get; set; }

        public decimal ProductPrice { get; set; }

        public int ProductStock { get; set; }

        public string CategoryName { get; set; }

        public string MarkName { get; set; }

        public int idmarca { get; set; }

        public int idcategoria { get; set; }

        public CategoryCLS CategoryCLS { get; set; }

        public MarkCLS MarkCLS { get; set; }
    }
}

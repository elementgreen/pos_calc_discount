/*******************************************************************************
*
*    Copyright (C) 2019 Regenesis Media - www.regenesismedia.com
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Affero General Public License as
*    published by the Free Software Foundation, either version 3 of the
*    License, or (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Affero General Public License for more details.
*
*    You should have received a copy of the GNU Affero General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*
*******************************************************************************/

odoo.define('pos_calc_discount.pos_calc_discount', function (require) {
  "use strict";

  var utils = require('web.utils');
  var round_di = utils.round_decimals;

  var models = require('point_of_sale.models');
  var _super_product = models.Product.prototype;
  var _super_orderline = models.Orderline.prototype;

  models.Product = models.Product.extend ({
    get_price: function() {
      var price = _super_product.get_price.apply (this, arguments);
      return Math.max (this.lst_price, price);
    }
  });

  models.Orderline = models.Orderline.extend ({
    initialize: function() {
      _super_orderline.initialize.apply (this, arguments);
      var price = _super_product.get_price.call (this.product, this.order.pricelist, this.get_quantity ());

      if (price < this.price)
      {
        var digits = this.pos.dp['Product Price'] + 1;
        var discount = ((this.price - price) * 100.0) / this.price;

        this.discount = parseFloat (round_di (discount, digits).toFixed (digits));
        this.discountStr = '' + this.discount;
        this.set_unit_price (this.price);
      }
    },
    can_be_merged_with: function(orderline) {
      var discount = this.discount;

      if (this.discount == orderline.discount)
        this.discount = 0;

      var retval = _super_orderline.can_be_merged_with.apply (this, arguments);
      this.discount = discount;

      return retval;
    }
  });
});


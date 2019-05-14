################################################################################
#
#    Copyright (C) 2019 Regenesis Media - www.regenesismedia.com
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
################################################################################

{
    'name': 'Calculate POS Discounts',
    'summary': 'Calculate point of sale product discounts from sales prices',
    'version': '1.0',
    'category': 'Point of Sale',
    'license': 'AGPL-3',
    'author': 'Element Green <element@regenesismedia.com>',
    'website': 'https://github.com/elementgreen/pos_calc_discount',

    'description': """

This module automatically calculates point of sale order line product discounts
from the difference between the standard product sales price and price list rules.

""",
    'depends': ['point_of_sale'],
    'data': [
        'views/assets.xml'
    ],
    'application': True,
    'installable': True,
    'auto_install': False
}


# pos_calc_discount
Odoo app to calculate point of sale (POS) discount from default product Sales Price and price list rules.

## Why Create This Addon?
Odoo product price lists and Point Of Sale (POS) discounts are currently seperate in Odoo. This means that even when setting a discount using product price list rules, the discount will not show on customer POS receipts, just the final per item amount.

This app addon sets POS order line unit prices to the default product **Sales Price** and calculates the appropriate discount for the order line, if the price from the price list is less than the default Sales Price.

This addon also enables merging of order line items, so long as the discount amount is the same. Odoo usually does not merge order lines if they have a discount set.

No discount is used if the price from the price list rules is larger than the default product Sales Price.

Discount can still be changed manually in the point of sale interface, based on the default product Sales Price.

## Installing
Just place the pos_calc_discount directory in your custom Odoo addons directory. You can add additional addon paths by appending them to the *addons_path* setting in odoo.conf (separated by commas).

For example (odoo.conf excerpt):
```
[options]
addons_path = /usr/lib/python3/dist-packages/odoo/addons,/home/element/odoo/addons
```

Go to **Settings** from the main menu in Odoo and Activate developer mode by clicking the **Activate the developer mode** link on the right side of the interface page.

Go to the Apps section from the main menu.
Click **Update Apps List** on the menu at the top of the page.
Click the Update button on the dialog.

Locate the **Calculate POS Discounts** in the list and click the Install button.

Nothing else needs to be done, addon is active when installed.

## Possible Issues And Limitations
In the interest of retaining the existing price list rules, this addon calculates order line discounts based on the default product Sales Price. This could result in oddball discount percentages if the sales list price is calculated in a strange fashion (not just a simple percentage discount).

There are likely cases where a lower price from the price list rules should not result in a discount being shown. This addon cannot currently be used in this case.

There could be other unexpected side effects of using the default Sales Price with a discount added instead of just using the final price. Bug reports welcome :-)

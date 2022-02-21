import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Badge
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ShoppingCartIcon />
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="cartMenu"
      >
        <div className="menuContainer">
        <ul class="sub-menu">
                <li>
                  <div class="flex-rows">
                  <div class="img-delete col-1">
                    <img src="img/icn_delete.png" alt=""/>
                    </div>
                    <div class="img-submenu col-3">
                      <img src="img/img.png" alt="image in the cart"/>
                    </div>
                    <div class="description-img col-5">
                      <p>Floral Print Wrap Dress</p>
                      <p class="color-black">size: 42</p>
                    </div>
                    <div class="qty col-3">
                      <p  class="color-black">Qty:1</p>
                      <p>$21.50</p>
                    </div>
                  </div>
                  <div class="flex-rows">
                    <div class="img-delete col-1">
                      <img src="img/icn_delete.png" alt=""/>
                      </div>
                      <div class="img-submenu col-3">
                        <img src="img/img.png" alt="image in the cart"/>
                      </div>
                      <div class="description-img col-5">
                        <p>Floral Print Wrap Dress</p>
                        <p class="color-black">size: 42</p>
                      </div>
                      <div class="qty col-3">
                        <p class="color-black">Qty:1</p>
                        <p>$32.50</p>
                      </div>
                    </div>
                    <div class="flex-rows">
                      <div class="img-delete col-1">
                        <img src="img/icn_delete.png" alt=""/>
                        </div>
                        <div class="img-submenu col-3">
                          <img src="img/img.png" alt="image in the cart"/>
                        </div>
                        <div class="description-img col-5">
                          <p>Floral Print Wrap Dress</p>
                          <p class="color-black">size: 42</p>
                        </div>
                        <div class="qty col-3">
                          <p class="color-black">Qty:1</p>
                          <p>$32.50</p>
                        </div>
                      </div>
                      
                  <hr/>
                  <h6>Address</h6>
                  <div class="row">
                  <div class="col-9">
                  <p> Block Number, Street Name </p>
                  <p> Building Floor,Apartment </p>
                </div>
                <div class="col-3">
                  <p class="color-black">Subtotal </p>
                  <p class="color-pink">$54.00</p>
                </div>
                  </div>
                  <div class="button-area">
                    <a href="" class="btn-pink">Show All</a>
                    <a href="" class="btn-pink">Cheakout</a>
                  </div>
              
                  
                </li>
                
              </ul>
        </div>
      </Menu>
    </div>
  );
}

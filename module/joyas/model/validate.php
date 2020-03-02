<?php
    function validate($cod_ref){
        //return false if already exists a product with same product_code in DB
        //return true if not
        if (DAOjoyas::select_joyas($cod_ref))
            $rt = false;
        else
            $rt = true;
        return $rt;
    }

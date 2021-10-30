import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function SidebarFilterBooks({ filter, showSearchInput }) {

    return (
        <>
            <DropdownButton
                variant='primary'
                title='Filtrar por'
            >
                <Dropdown.Item onClick={()=> filter('finance')} >Finanzas</Dropdown.Item>
                <Dropdown.Item onClick={()=> filter('personalDevelopment')} >Desarrollo personal</Dropdown.Item>
                <Dropdown.Item onClick={()=> filter('biographies')} >Biografías</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={()=> showSearchInput(true)}>Buscar</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default SidebarFilterBooks

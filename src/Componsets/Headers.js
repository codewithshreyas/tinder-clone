import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { pink } from '@mui/material/colors';
function Headers() {
    return (
        <div class="header">
            <AccountCircleIcon  fontSize="large"/>
            <LocalFireDepartmentIcon  sx={{ color: pink[500] }} fontSize="large"/>
            <ChatBubbleOutlineIcon  fontSize="large"/>
        </div>
    )
}

export default Headers

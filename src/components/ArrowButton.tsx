import React from "react";
import Button from "@mui/material/Button";

interface ArrowButtonProps {
btnName: String;
marginRight: String;

}

const ArrowButton: React.FC<ArrowButtonProps> = (props) =>{
  const { btnName, marginRight} = props;
  return (
    <Button
      style={{
        boxShadow: "0px 20px 12px rgba(0, 0, 0, 0.1)",
        width: "232px",
        height: "56px",
        flexShrink: 0,
        borderRadius: "200px",
        background: "#FFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "18px"
      }}
      sx={{
        textTransform: 'none',
        marginRight:{marginRight}
      }}
    >
      <div style={{ flex: 1, textAlign: "center", color:"black", fontWeight:"bold" }} >{btnName}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <rect width="46" height="46" rx="23" fill="#FF9B50" />
        <path
          d="M35.7071 23.7071C36.0976 23.3166 36.0976 22.6834 35.7071 22.2929L29.3431 15.9289C28.9526 15.5384 28.3195 15.5384 27.9289 15.9289C27.5384 16.3195 27.5384 16.9526 27.9289 17.3431L33.5858 23L27.9289 28.6569C27.5384 29.0474 27.5384 29.6805 27.9289 30.0711C28.3195 30.4616 28.9526 30.4616 29.3431 30.0711L35.7071 23.7071ZM10 24H35V22H10V24Z"
          fill="white"
        />
      </svg>
    </Button>
  );
};

export default ArrowButton;

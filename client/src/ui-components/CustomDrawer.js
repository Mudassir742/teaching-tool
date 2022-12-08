// material
import { Drawer } from "@mui/material";

const CustomDrawer = ({ isOpenSidebar, onCloseSidebar, children }) => {
  return (
    <Drawer
      open={isOpenSidebar}
      onClose={onCloseSidebar}
      PaperProps={{
        sx: { width: "280px", background: "transparent" },
      }}
      className=""
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;

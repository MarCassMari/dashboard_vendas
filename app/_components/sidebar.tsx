"use client";

import SidebarButton from "./sidebar-button";
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/*IMAGEM*/}
      <div className="px-8 py-6">
        <div className="text-2xl font-bold">LUMIMARCUS</div>
      </div>
      {/*BOTÕES*/}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;

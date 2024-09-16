"use client";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { NavItems, Organization } from "./nav-items";

interface SidebarProps {
  storageKey?: string;
}

const Sidebar = ({ storageKey = "kanflow-sidebar-state" }: SidebarProps) => {
  const [expand, setExpand] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordingValue: string[] = Object.keys(expand).reduce(
    (acc: string[], key: string) => {
      if (expand[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpand((curr) => ({
      ...curr,
      [id]: !expand[id],
    }));
  };

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  return (
    <>
      <div className="font-medium text-xs flex items-centre mb-1">
        <span className="pl-4 mt-2">Workspace</span>
        <Button
          asChild
          variant={"ghost"}
          type="button"
          size={"icon"}
          className="ml-auto"
        >
          <Link href={"/select-org"}>
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordingValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItems
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expand[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;

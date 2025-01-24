import { ModeToggle } from "@/components/mode-toggle"
import { AccordionDemo } from "@/components/sink/accordion-demo"
import { AlertDemo } from "@/components/sink/alert-demo"
import { AlertDialogDemo } from "@/components/sink/alert-dialog-demo"
import { AppSidebar } from "@/components/sink/app-sidebar"
import { AspectRatioDemo } from "@/components/sink/aspect-ratio-demo"
import { AvatarDemo } from "@/components/sink/avatar-demo"
import { BadgeDemo } from "@/components/sink/badge-demo"
import { BadgeDestructive } from "@/components/sink/badge-destructive"
import { BadgeOutline } from "@/components/sink/badge-outline"
import { BadgeSecondary } from "@/components/sink/badge-secondary"
import { BreadcrumbDemo } from "@/components/sink/breadcrumb-demo"
import { ButtonDemo } from "@/components/sink/button-demo"
import { ButtonDestructive } from "@/components/sink/button-destructive"
import { ButtonGhost } from "@/components/sink/button-ghost"
import { ButtonLink } from "@/components/sink/button-link"
import { ButtonLoading } from "@/components/sink/button-loading"
import { ButtonOutline } from "@/components/sink/button-outline"
import { ButtonSecondary } from "@/components/sink/button-secondary"
import { ButtonWithIcon } from "@/components/sink/button-with-icon"
import { CalendarDemo } from "@/components/sink/calendar-demo"
import { CardDemo } from "@/components/sink/card-demo"
import { CarouselDemo } from "@/components/sink/carousel-demo"
import { CheckboxDemo } from "@/components/sink/checkbox-demo"
import { CollapsibleDemo } from "@/components/sink/collapsible-demo"
import { ComboboxDemo } from "@/components/sink/combobox-demo"
import { CommandDemo } from "@/components/sink/command-demo"
import { ComponentWrapper } from "@/components/sink/component-wrapper"
import { ContextMenuDemo } from "@/components/sink/context-menu-demo"
import { DatePickerDemo } from "@/components/sink/date-picker-demo"
import { DialogDemo } from "@/components/sink/dialog-demo"
import { DrawerDemo } from "@/components/sink/drawer-demo"
import { DropdownMenuDemo } from "@/components/sink/dropdown-menu-demo"
import { HoverCardDemo } from "@/components/sink/hover-card-demo"
import { InputDemo } from "@/components/sink/input-demo"
import { InputOTPDemo } from "@/components/sink/input-otp-demo"
import { LabelDemo } from "@/components/sink/label-demo"
import { MenubarDemo } from "@/components/sink/menubar-demo"
import { NavigationMenuDemo } from "@/components/sink/navigation-menu-demo"
import { PaginationDemo } from "@/components/sink/pagination-demo"
import { PopoverDemo } from "@/components/sink/popover-demo"
import { ProgressDemo } from "@/components/sink/progress-demo"
import { RadioGroupDemo } from "@/components/sink/radio-group-demo"
import { ResizableHandleDemo } from "@/components/sink/resizable-handle"
import { ScrollAreaDemo } from "@/components/sink/scroll-area-demo"
import { SelectDemo } from "@/components/sink/select-demo"
import { SeparatorDemo } from "@/components/sink/separator-demo"
import { SheetDemo } from "@/components/sink/sheet-demo"
import { SkeletonDemo } from "@/components/sink/skeleton-demo"
import { SliderDemo } from "@/components/sink/slider-demo"
import { SonnerDemo } from "@/components/sink/sonner-demo"
import { SwitchDemo } from "@/components/sink/switch-demo"
import { TableDemo } from "@/components/sink/table-demo"
import { TabsDemo } from "@/components/sink/tabs-demo"
import { TextareaDemo } from "@/components/sink/textarea-demo"
import { ToastDemo } from "@/components/sink/toast-demo"
import { ToggleDemo } from "@/components/sink/toggle-demo"
import { ToggleDisabled } from "@/components/sink/toggle-disabled"
import { ToggleGroupDemo } from "@/components/sink/toggle-group-demo"
import { ToggleOutline } from "@/components/sink/toggle-outline"
import { ToggleWithText } from "@/components/sink/toggle-with-text"
import { TooltipDemo } from "@/components/sink/tooltip-demo"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Toaster } from "sonner"
import { Toaster as ShadcnToaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex items-center gap-2 ml-auto">
              <ModeToggle />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Toaster/>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ComponentWrapper name="Accordion">
              <AccordionDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Alert">
              <AlertDemo />
            </ComponentWrapper>
            <ComponentWrapper name="AlertDialog">
              <AlertDialogDemo />
            </ComponentWrapper>
            <ComponentWrapper name="AspectRatio">
              <AspectRatioDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Avatar">
              <AvatarDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Badge">
              <BadgeDemo />
              <BadgeDestructive />
              <BadgeOutline />
              <BadgeSecondary />
            </ComponentWrapper>
            <ComponentWrapper name="Breadcrumb">
              <BreadcrumbDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Button">
              <div className="flex items-center gap-2">
                <ButtonDemo />
                <ButtonDestructive />
                <ButtonGhost />
                <ButtonLink />
              </div>
              <div className="flex items-center gap-2">
                <ButtonLoading />
                <ButtonOutline />
                <ButtonSecondary />
              </div>
              <div className="flex items-center gap-2">
                <ButtonWithIcon />
              </div>
            </ComponentWrapper>
            <ComponentWrapper name="Calendar">
              <CalendarDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Card">
              <CardDemo className="w-full" />
            </ComponentWrapper>
            <ComponentWrapper
              name="Carousel"
              className="[&_.max-w-xs]:max-w-[70%]"
            >
              <CarouselDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Checkbox">
              <CheckboxDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Collapsible">
              <CollapsibleDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Combobox">
              <ComboboxDemo />
            </ComponentWrapper>
            <ComponentWrapper
              name="Command"
              className="md:[&_[cmdk-root]]:min-w-max"
            >
              <CommandDemo />
            </ComponentWrapper>
            <ComponentWrapper name="ContextMenu">
              <ContextMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper name="DatePicker">
              <DatePickerDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Dialog">
              <DialogDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Drawer">
              <DrawerDemo />
            </ComponentWrapper>
            <ComponentWrapper name="DropdownMenu">
              <DropdownMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper name="HoverCard">
              <HoverCardDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Input">
              <InputDemo />
            </ComponentWrapper>
            <ComponentWrapper name="InputOTP">
              <InputOTPDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Label">
              <LabelDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Menubar">
              <MenubarDemo />
            </ComponentWrapper>
            <ComponentWrapper name="NavigationMenu" className="col-span-2">
              <NavigationMenuDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Pagination">
              <PaginationDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Popover">
              <PopoverDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Progress">
              <ProgressDemo />
            </ComponentWrapper>
            <ComponentWrapper name="RadioGroup">
              <RadioGroupDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Resizable" className="col-span-2">
              <ResizableHandleDemo />
            </ComponentWrapper>
            <ComponentWrapper name="ScrollArea">
              <ScrollAreaDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Select">
              <SelectDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Separator">
              <SeparatorDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Sheet">
              <SheetDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Skeleton">
              <SkeletonDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Slider">
              <SliderDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Sonner">
              <SonnerDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Switch">
              <SwitchDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Table" className="col-span-2">
              <TableDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Tabs">
              <TabsDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Textarea">
              <TextareaDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Toast">
              <ToastDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Toggle">
              <div className="flex items-center gap-2">
                <ToggleDemo />
                <ToggleDisabled />
                <ToggleOutline />
                <ToggleWithText />
              </div>
            </ComponentWrapper>
            <ComponentWrapper name="ToggleGroup">
              <ToggleGroupDemo />
            </ComponentWrapper>
            <ComponentWrapper name="Tooltip">
              <TooltipDemo />
            </ComponentWrapper>
          </div>
          <ShadcnToaster/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

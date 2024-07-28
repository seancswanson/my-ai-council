import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  File,
  ListFilter,
  MoreVertical,
} from "lucide-react"

export default function ConversationHistoryPage() {
  return (
    <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        <Card className="sm:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Your Conversations</CardTitle>
            <CardDescription className="max-w-lg leading-relaxed text-balance">
              Explore your conversation history and insights from interactions with your Council.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button>Start New Conversation</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +20% from last week
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={20} aria-label="20% increase" />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>This Month</CardDescription>
            <CardTitle className="text-4xl">45</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +15% from last month
            </div>
          </CardContent>
          <CardFooter>
            <Progress value={15} aria-label="15% increase" />
          </CardFooter>
        </Card>
      </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1 text-sm h-7"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Advice Requests
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  General Discussions
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  Decision Making
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="sm"
              variant="outline"
              className="gap-1 text-sm h-7"
            >
              <File className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Export</span>
            </Button>
          </div>
        </div>
          <Card>
            <CardHeader className="px-7">
              <CardTitle>Conversations</CardTitle>
              <CardDescription>
                All conversations with your Council.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                  <TableHead>
                      Date
                    </TableHead>
                    <TableHead>Topic</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Type
                    </TableHead>

                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-accent">

                  <TableCell>
                      2024-07-23
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">Career Transition</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        Seeking advice on changing careers
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      Advice Request
                    </TableCell>

                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
    </div>
  )
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Home | My AI Council",
  description: "Your AI Council is here to help you navigate any and all situations. Reach out to them for guidance, advice, or just to chat.",
};
export default function DashboardPage() {
  return (
    <>
      <div className="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Your Council Awaits</CardTitle>
              <CardDescription className="max-w-lg leading-relaxed text-balance">
                Your Council is here to help you navigate any and all situations. Reach out to them for guidance, advice, or just to chat.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Convene Council</Button>
              <Button variant={'secondary'}>Change Active Council</Button>
            </CardFooter>
          </Card>
        </div>
        <Card>
          <CardHeader className="px-7">
            <CardTitle>Recent Conversation History</CardTitle>
            <CardDescription>
              Summaries from recent conversations with your Council.
            </CardDescription>
          </CardHeader>
          <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[50%]">Summary / Outcome</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Type
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            Participants
                          </TableHead>
                          <TableHead className="">
                            Date
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">Request for guidance on a work-related situation involving intellectual property.</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                              Request for guidance on a work-related situation involving intellectual property. The employee is concerned about the potential for a conflict of interest and wants to know how to proceed. The Council member provides advice on how to handle the situation and suggests that the employee speak with their manager.
                            </div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            Request for Guidance
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              1,2,3,4,5
                            </Badge>
                          </TableCell>
                          <TableCell className="">
                            2023-06-23
                          </TableCell>
                        </TableRow>
                        
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                </div>
    </>
  )
}
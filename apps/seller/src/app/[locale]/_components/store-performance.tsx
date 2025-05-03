import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@yadwy/ui";

export default function StorePerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Performance</CardTitle>
        <CardDescription>
          Your store's performance over the last 30 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sales">
          <TabsList className="mb-4">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="visitors">Visitors</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="space-y-4">
            <div className="h-[200px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Sales chart will be displayed here
              </p>
            </div>
          </TabsContent>
          <TabsContent value="visitors" className="space-y-4">
            <div className="h-[200px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Visitors chart will be displayed here
              </p>
            </div>
          </TabsContent>
          <TabsContent value="products" className="space-y-4">
            <div className="h-[200px] w-full bg-muted/30 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Products chart will be displayed here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

"use client";

import {
  ArrowLeft,
  Check,
  ImageIcon,
  Loader2,
  Plus,
  Save,
  Trash2,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@yadwy/ui";
import { Badge } from "@yadwy/ui";
import { Button } from "@yadwy/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@yadwy/ui";
import { Input } from "@yadwy/ui";
import { Label } from "@yadwy/ui";
import { RadioGroup, RadioGroupItem } from "@yadwy/ui";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@yadwy/ui";
import { Separator } from "@yadwy/ui";
import { Switch } from "@yadwy/ui";
import { Textarea } from "@yadwy/ui";

interface ProductFormProps {
  mode: "create" | "edit";
  productId?: string;
}

interface ProductImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

interface ProductVariant {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export function ProductForm({ mode, productId }: ProductFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    compareAtPrice: "",
    sku: "",
    barcode: "",
    category: "",
    tags: "",
    stock: "",
    weight: "",
    length: "",
    width: "",
    height: "",
    shippingRequired: true,
    taxable: true,
    status: "draft",
  });

  const [images, setImages] = useState<ProductImage[]>([]);
  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [hasVariants, setHasVariants] = useState(false);

  // Mock data for edit mode
  useEffect(() => {
    if (mode === "edit" && productId) {
      setIsLoading(true);
      // Simulate API call to fetch product data
      setTimeout(() => {
        // Mock product data
        setFormData({
          name: "Handmade Ceramic Mug",
          description:
            "Beautifully crafted ceramic mug, perfect for your morning coffee or tea. Each piece is unique with slight variations in glaze and form.",
          price: "24.99",
          compareAtPrice: "29.99",
          sku: "CERM-001",
          barcode: "123456789",
          category: "home-decor",
          tags: "ceramic, mug, handmade, kitchen",
          stock: "15",
          weight: "0.5",
          length: "4",
          width: "4",
          height: "5",
          shippingRequired: true,
          taxable: true,
          status: "active",
        });

        setImages([
          {
            id: "img1",
            url: "/placeholder.svg?height=500&width=500",
            isPrimary: true,
          },
          {
            id: "img2",
            url: "/placeholder.svg?height=500&width=500",
            isPrimary: false,
          },
        ]);

        setIsLoading(false);
      }, 800);
    }
  }, [mode, productId]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddImage = () => {
    // In a real app, this would open a file picker and upload the image
    const newImage: ProductImage = {
      id: `img-${Date.now()}`,
      url: "/placeholder.svg?height=500&width=500",
      isPrimary: images.length === 0, // First image is primary by default
    };

    setImages((prev) => [...prev, newImage]);
  };

  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);

      // If we removed the primary image, set the first remaining image as primary
      if (prev.find((img) => img.id === id)?.isPrimary && filtered.length > 0) {
        return filtered.map((img, index) => ({
          ...img,
          isPrimary: index === 0,
        }));
      }

      return filtered;
    });
  };

  const handleSetPrimaryImage = (id: string) => {
    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        isPrimary: img.id === id,
      })),
    );
  };

  const handleAddVariant = () => {
    const newVariant: ProductVariant = {
      id: `var-${Date.now()}`,
      name: "New Variant",
      price: 0,
      stock: 0,
    };

    setVariants((prev) => [...prev, newVariant]);
  };

  const handleUpdateVariant = (
    id: string,
    field: string,
    value: string | number,
  ) => {
    setVariants((prev) =>
      prev.map((variant) =>
        variant.id === id
          ? {
              ...variant,
              [field]: value,
            }
          : variant,
      ),
    );
  };

  const handleRemoveVariant = (id: string) => {
    setVariants((prev) => prev.filter((variant) => variant.id !== id));
  };

  const handleSave = () => {
    setIsSaving(true);

    // Simulate API call to save product
    setTimeout(() => {
      setIsSaving(false);
      toast(mode === "create" ? "Product created" : "Product updated", {
        description: `${formData.name} has been ${mode === "create" ? "created" : "updated"} successfully.`,
      });

      // Redirect to products page
      router.push("/products");
    }, 1500);
  };

  const handleDelete = () => {
    setIsLoading(true);

    // Simulate API call to delete product
    setTimeout(() => {
      setIsLoading(false);
      toast("Product deleted", {
        description: `${formData.name} has been deleted.`,
        // TODO: search for a way to make a variant in sonner.
        // variant: "destructive",
      });

      // Redirect to products page
      router.push("/products");
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Loading product data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/products">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to products</span>
              </Link>
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">
              {mode === "create" ? "Add New Product" : "Edit Product"}
            </h1>
            {mode === "edit" && (
              <Badge
                className={
                  formData.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }
              >
                {formData.status === "active" ? "Active" : "Draft"}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {mode === "edit" && (
              <Button
                variant="outline"
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            )}
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Product
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Enter the basic details of your product
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                placeholder="Enter product name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your product"
                rows={5}
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
              />
              <p className="text-xs text-muted-foreground">
                Describe your product in detail. Include materials, dimensions,
                and care instructions.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    min="0"
                    className="pl-7"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="compareAtPrice">Compare-at Price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="compareAtPrice"
                    type="number"
                    step="0.01"
                    min="0"
                    className="pl-7"
                    placeholder="0.00"
                    value={formData.compareAtPrice}
                    onChange={(e) =>
                      handleInputChange("compareAtPrice", e.target.value)
                    }
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Original price if the product is on sale (optional)
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    handleInputChange("category", value)
                  }
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jewelry">Jewelry</SelectItem>
                    <SelectItem value="home-decor">Home Decor</SelectItem>
                    <SelectItem value="clothing">
                      Clothing & Accessories
                    </SelectItem>
                    <SelectItem value="art">Art & Collectibles</SelectItem>
                    <SelectItem value="craft-supplies">
                      Craft Supplies
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Enter tags separated by commas"
                  value={formData.tags}
                  onChange={(e) => handleInputChange("tags", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Tags help customers find your products (e.g., ceramic,
                  handmade, gift)
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                <Input
                  id="sku"
                  placeholder="Enter SKU"
                  value={formData.sku}
                  onChange={(e) => handleInputChange("sku", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                <Input
                  id="barcode"
                  placeholder="Enter barcode"
                  value={formData.barcode}
                  onChange={(e) => handleInputChange("barcode", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Product Status</Label>
              <RadioGroup
                id="status"
                value={formData.status}
                onValueChange={(value) => handleInputChange("status", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="active" id="active" />
                  <Label htmlFor="active" className="font-normal">
                    Active (visible to customers)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="draft" id="draft" />
                  <Label htmlFor="draft" className="font-normal">
                    Draft (hidden from customers)
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Product Images */}
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>
              Add images of your product (up to 10 images)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative h-40 w-40 overflow-hidden rounded-md border bg-muted"
                >
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt="Product image"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:bg-black/50 hover:opacity-100">
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleSetPrimaryImage(image.id)}
                        disabled={image.isPrimary}
                      >
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Set as primary</span>
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleRemoveImage(image.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove image</span>
                      </Button>
                    </div>
                  </div>
                  {image.isPrimary && (
                    <Badge className="absolute left-2 top-2 bg-primary">
                      Primary
                    </Badge>
                  )}
                </div>
              ))}

              {images.length < 10 && (
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="flex h-40 w-40 flex-col items-center justify-center rounded-md border border-dashed text-muted-foreground hover:bg-muted/50"
                >
                  <ImageIcon className="mb-2 h-8 w-8" />
                  <span className="text-sm">Add Image</span>
                </button>
              )}
            </div>

            {images.length === 0 && (
              <div className="rounded-md border border-dashed p-8 text-center">
                <ImageIcon className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                <h3 className="mb-1 text-sm font-medium">
                  No images added yet
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Add high-quality images to showcase your product
                </p>
                <Button onClick={handleAddImage}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Image
                </Button>
              </div>
            )}

            <div className="rounded-md bg-muted/50 p-4">
              <h3 className="mb-2 text-sm font-medium">Image Guidelines</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Use high-quality images with good lighting</li>
                <li>Show the product from multiple angles</li>
                <li>Include images that show the product in use</li>
                <li>Recommended size: 1000 x 1000 pixels or larger</li>
                <li>Maximum file size: 5MB per image</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Inventory & Shipping */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory & Shipping</CardTitle>
            <CardDescription>
              Manage inventory and shipping details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="stock">Inventory Quantity</Label>
              <Input
                id="stock"
                type="number"
                min="0"
                placeholder="0"
                value={formData.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
              />
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Shipping</h3>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="shippingRequired">
                    This product requires shipping
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Disable for digital or service products
                  </p>
                </div>
                <Switch
                  id="shippingRequired"
                  checked={formData.shippingRequired}
                  onCheckedChange={(checked) =>
                    handleInputChange("shippingRequired", checked)
                  }
                />
              </div>

              {formData.shippingRequired && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={formData.weight}
                      onChange={(e) =>
                        handleInputChange("weight", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="length">Length (cm)</Label>
                      <Input
                        id="length"
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="0.0"
                        value={formData.length}
                        onChange={(e) =>
                          handleInputChange("length", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (cm)</Label>
                      <Input
                        id="width"
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="0.0"
                        value={formData.width}
                        onChange={(e) =>
                          handleInputChange("width", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder="0.0"
                        value={formData.height}
                        onChange={(e) =>
                          handleInputChange("height", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="taxable">Charge tax on this product</Label>
                <p className="text-sm text-muted-foreground">
                  Disable if this product is tax exempt
                </p>
              </div>
              <Switch
                id="taxable"
                checked={formData.taxable}
                onCheckedChange={(checked) =>
                  handleInputChange("taxable", checked)
                }
              />
            </div>
          </CardContent>
        </Card>

        {/* Product Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Product Variants</CardTitle>
            <CardDescription>
              Add variants if your product comes in different options like sizes
              or colors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="hasVariants">
                  This product has multiple variants
                </Label>
                <p className="text-sm text-muted-foreground">
                  Enable if your product comes in different options
                </p>
              </div>
              <Switch
                id="hasVariants"
                checked={hasVariants}
                onCheckedChange={setHasVariants}
              />
            </div>

            {hasVariants ? (
              <>
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="px-4 py-3 text-left text-sm font-medium">
                          Variant Name
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium">
                          Price
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-medium">
                          Stock
                        </th>
                        <th className="px-4 py-3 text-right text-sm font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {variants.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="px-4 py-8 text-center text-sm text-muted-foreground"
                          >
                            No variants added yet. Click "Add Variant" to create
                            your first variant.
                          </td>
                        </tr>
                      ) : (
                        variants.map((variant) => (
                          <tr key={variant.id} className="border-b">
                            <td className="px-4 py-3">
                              <Input
                                value={variant.name}
                                onChange={(e) =>
                                  handleUpdateVariant(
                                    variant.id,
                                    "name",
                                    e.target.value,
                                  )
                                }
                                className="h-8"
                              />
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1.5 text-muted-foreground">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  value={variant.price}
                                  onChange={(e) =>
                                    handleUpdateVariant(
                                      variant.id,
                                      "price",
                                      Number.parseFloat(e.target.value),
                                    )
                                  }
                                  className="h-8 pl-7"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <Input
                                type="number"
                                min="0"
                                value={variant.stock}
                                onChange={(e) =>
                                  handleUpdateVariant(
                                    variant.id,
                                    "stock",
                                    Number.parseInt(e.target.value),
                                  )
                                }
                                className="h-8"
                              />
                            </td>
                            <td className="px-4 py-3 text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleRemoveVariant(variant.id)}
                              >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Remove variant</span>
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <Button onClick={handleAddVariant}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Variant
                </Button>

                <div className="rounded-md bg-muted/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Variant Examples</h3>
                  <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Size: Small, Medium, Large</li>
                    <li>Color: Red, Blue, Green</li>
                    <li>Material: Cotton, Silk, Wool</li>
                    <li>Style: Modern, Classic, Vintage</li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="rounded-md border border-dashed p-8 text-center">
                <h3 className="mb-1 text-sm font-medium">
                  No variants enabled
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Enable variants if your product comes in different options
                  like sizes, colors, or materials.
                </p>
                <Button onClick={() => setHasVariants(true)}>
                  Enable Variants
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this product?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product and remove it from your store.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

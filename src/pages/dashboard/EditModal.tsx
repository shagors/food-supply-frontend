import { FormEvent, useState } from "react";
import { NotebookPenIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
// import { useUpdateSuppliesMutation } from "@/redux/features/supplies/suppliesApi";
import { toast } from "sonner";

type TItemProps = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: string;
};

const EditModal = ({
  _id,
  title,
  description,
  category,
  quantity,
}: TItemProps) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedQuantity, setEditedQuantity] = useState(quantity);
  const [editedDescription, setEditedDescription] = useState(description);

  // const [updateSupply] = useUpdateSuppliesMutation();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const updatedSupply = {
      title: editedTitle,
      category: editedCategory,
      quantity: editedQuantity,
      description: editedDescription,
    };
    const options = {
      supplyId: _id,
      data: updatedSupply,
    };
    // console.log(options);
    // updateSupply(options);

    // https://food-dist-supplies-management-backend.vercel.app
    // http://localhost:5000

    try {
      const response = await fetch(
        `https://food-dist-supplies-management-backend.vercel.app/api/v1/supplies/${options.supplyId}`,
        {
          method: "PUT", // Use 'PUT' for update
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(options.data),
        }
      );

      if (response.ok) {
        // Update was successful
        toast.success("Supply updated successfully");
      } else {
        // Handle error cases
        console.error(`Failed to update supply. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error occurred during supply update:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <NotebookPenIcon className="text-purple-600 cursor-pointer hover:text-purple-800" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Supply</DialogTitle>
            <DialogDescription>
              Your can update supply data here!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* title */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                className="col-span-3"
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
              />
            </div>

            {/* Quantity */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="quantity" className="text-right">
                Quantity
              </Label>
              <Input
                id="quantity"
                className="col-span-3"
                value={editedQuantity}
                onChange={(e) => setEditedQuantity(e.target.value)}
              />
            </div>

            {/* description */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit" className="text-xl font-medium text-white">
                Save
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;

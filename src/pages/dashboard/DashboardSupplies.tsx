import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteSuppliesByIdMutation,
  useGetSuppliesQuery,
} from "@/redux/features/supplies/suppliesApi";
import { FilePlus2Icon, Trash2Icon } from "lucide-react";
import { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import EditModal from "./EditModal";
import { Link } from "react-router-dom";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type TItemProps = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: string;
};

const DashboardSupplies = () => {
  // data get from server with rtk
  const { data, isLoading, isError } = useGetSuppliesQuery(undefined);

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    supplyIdToDelete: "",
  });

  // data delete function call for server with rtk
  const [deleteSupply] = useDeleteSuppliesByIdMutation();
  // console.log(data.data);

  if (isLoading) {
    return (
      <p className="text-4xl text-gray-500 font-thin text-center mt-36">
        <ClipLoader cssOverride={override} color="#36d7b7" size={60} />
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-4xl text-red-500 font-thin text-center mt-16">
        Something went wrong data fetching try again later !!
      </p>
    );
  }

  const deleteSupplyFromServer = (id: string) => {
    deleteSupply(id);
    setDeleteConfirmation({ isOpen: false, supplyIdToDelete: "" });
  };

  const handleDeleteConfirmation = (id: string) => {
    setDeleteConfirmation({ isOpen: true, supplyIdToDelete: id });
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmation({ isOpen: false, supplyIdToDelete: "" });
  };

  return (
    <div className="bg-slate-300 bg-opacity-20 h-screen pt-2">
      <h1 className="text-3xl text-center font-light mb-7 shadow p-4 rounded-b-lg">
        All Supplies List
      </h1>
      <div className="flex items-center justify-end my-4 mr-6">
        <Link
          to="/dashboard/create-supply"
          className="bg-slate-300 px-8 py-2 text-black font-semibold rounded-md hover:text-white hover:bg-slate-700 flex items-center gap-2"
        >
          <FilePlus2Icon className="size-5" />
          Add Supply
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: TItemProps) => (
            <TableRow key={item._id}>
              <TableCell className="">{item.title}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell className="flex items-center gap-5">
                <EditModal {...item} />
                <Trash2Icon
                  className="text-red-600 cursor-pointer hover:text-red-400"
                  onClick={() => handleDeleteConfirmation(item._id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Delete confirmation dialog */}
      {deleteConfirmation.isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-4 rounded-md w-[400px] h-40">
            <p className="text-red-600 text-xl mb-7 font-semibold">
              Are you sure you want to delete this supply?
            </p>
            <button
              className="bg-red-500 px-7 py-2 rounded-md text-white font-semibold mr-16 hover:bg-red-800"
              onClick={() =>
                deleteSupplyFromServer(deleteConfirmation.supplyIdToDelete)
              }
            >
              Yes
            </button>
            <button
              className="bg-green-500 px-7 py-2 rounded-md text-white font-semibold mr-16 hover:bg-green-800"
              onClick={closeDeleteConfirmation}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardSupplies;

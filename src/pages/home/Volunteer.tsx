import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2Icon } from "lucide-react";
import { CSSProperties, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useDeleteVolunteerByIdMutation,
  useGetVolunteersQuery,
} from "@/redux/features/volunteers/volunteerApi";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

type TItemProps = {
  _id: string;
  name: string;
  image: string;
  email: string;
  phone: string;
  location: string;
};

const Volunteer = () => {
  // data get from server with rtk
  const { data, isLoading, isError } = useGetVolunteersQuery(undefined);

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    supplyIdToDelete: "",
  });

  // data delete function call for server with rtk
  const [deleteVolunteer] = useDeleteVolunteerByIdMutation();
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

  const deleteVolunteerFromServer = (id: string) => {
    deleteVolunteer(id);
    setDeleteConfirmation({ isOpen: false, supplyIdToDelete: "" });
  };

  const handleDeleteConfirmation = (id: string) => {
    setDeleteConfirmation({ isOpen: true, supplyIdToDelete: id });
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmation({ isOpen: false, supplyIdToDelete: "" });
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-[115px] h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8 }}
        className="my-20"
      >
        <SectionTitle heading="Our Volunteers" />
        <Link to="/volunteer-form" className="justify-end">
          <Button>Register as a Volunteer</Button>
        </Link>

        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="">Image</TableHead>
              <TableHead>Volunteer Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: TItemProps) => (
              <TableRow key={item._id}>
                <TableCell className="">
                  <img
                    src={item.image}
                    alt="buyerImage"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
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
                  deleteVolunteerFromServer(deleteConfirmation.supplyIdToDelete)
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
      </motion.div>
    </div>
  );
};

export default Volunteer;

import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="lg:p-4 md:p-3 sm:p-2 p-1 lg:pb-8 md:pb-6 sm:pb-4 pb-2 text-sm font-semibold capitalize w-[48px]"></th>
                        <th className="lg:p-4 md:p-3 sm:p-2 p-1 lg:pb-8 md:pb-6 sm:pb-4 pb-2 text-sm font-semibold capitalize text-start w-[300px]">
                            {" "}
                            Title{" "}
                        </th>
                        <th className="lg:p-4 md:p-3 sm:p-2 p-1 lg:pb-8 md:pb-6 sm:pb-4 pb-2 text-sm font-semibold capitalize md:w-[100px]">
                            {" "}
                            Options{" "}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr
                            key={task.id}
                            className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                            <td>
                                <button onClick={() => onFav(task.id)}>
                                    {task.isFavorite ? (
                                        <FaStar color="yellow" />
                                    ) : (
                                        <FaStar color="gray" />
                                    )}
                                </button>
                            </td>
                            <td className="text-start  md:text-base sm:text-sm text-[12px]">{task.title}</td>
                            <td>
                                <div className="flex items-center text-center md:text-base sm:text-sm text-[12px] justify-center space-x-3">
                                    <button
                                        className="text-red-500"
                                        onClick={() => onDelete(task.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="text-blue-500"
                                        onClick={() => onEdit(task)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

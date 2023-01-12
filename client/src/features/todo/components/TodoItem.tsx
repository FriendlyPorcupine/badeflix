import { FC } from "react";

interface Props {
    title: string;
    completed: boolean;
}

export const TodoItem: FC<Props> = ({title, completed}) => {
    return (
        <li>
            <input type="checkbox" checked={completed} readOnly />
            <span>{title}</span>
        </li>
    );
}
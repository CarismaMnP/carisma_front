import Link from "next/link";
import s from "./Breadcrubs.module.css"
import { ArrowIcon } from "@/shared/assets";

type Breadcrub = {
    name: string;
    link: string;
}

interface IBreadcrubs {
    data: Breadcrub[]
}

export const Breadcrubs = ({ data }: IBreadcrubs) => {
    return (
        <div className={s.breadcrubs}>
            {
                data.map((breadcrumb, index) => {
                    return <Link className={s.breadcrumb} key={index} href={breadcrumb.link}>
                        {breadcrumb.name}
                        <div>{data.length != index + 1 ? <ArrowIcon style={{ width: '6px', height: '8px', transform: 'rotate(180deg)' }} /> : <></>}</div>
                    </Link>
                })
            }
        </div>
    )
}
import { useRouter } from "next/router";

const PageNo = () => {

    const router = useRouter();
    const pageNumber = router.query.pageNo;

    return (
        <div>
            <h1>Page {pageNumber} </h1>
        </div>
    )
}

export default PageNo;
import RcPagination from "rc-pagination";
import 'rc-pagination/assets/index.css';

export default function Pagination({
  pageSize = 20,
  currentPage = 0,
  align = "center",
  total = 20,
  onPageNumChange = (pageNo: number) => {},
}) {
  console.info("currentPage:", currentPage)
  return (
    <div>
      <div
        className={`flex ${align == "start" ? "justify-start" : align=='end'?'justify-end':"justify-center"} items-center ${total > pageSize ? "mt-8 pb-12 md:pb-4" : ""}`}
      >
        <RcPagination
          hideOnSinglePage={true}
          showPrevNextJumpers={false}
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={(pageNum: number) => {
            onPageNumChange(pageNum);
          }}
        />
      </div>
    </div>
  );
}

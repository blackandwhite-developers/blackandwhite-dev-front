import { lodgeService } from "@/api/services";
import { LodgeService } from "@/api/services/lodge.service";
import Loading from "@/components/loading/Loading";
import ProductDetailView from "@/views/ProductDetail/ProductDetail.view";

interface ProductDetailProps {
  category: { id: string; title: string; thumbnail: string };
  name: string;
  rating: number;
  count: number;
  distance: string;
}

interface ProductDetailCardProps {
  image: string;
  event: string;
  name: string;
  capacity: { standard: number; maximum: number };
  time: { checkIn: string; checkOut: string };
  price: { price: number };
  stock: number;
}

type ProductDetailPageProps = {
  params: Promise<{ lodgeId: string }>;
};

const fetchLodgeData = async (lodgeId: string) => {
  const res = await lodgeService.getLodgeById({
    path: {
      lodgeId: lodgeId,
    },
  });

  return res.data;
};

export default async function ProductDetailPage(props: ProductDetailPageProps) {
  const { lodgeId } = await props.params;
  console.log(lodgeId);
  const lodgeData = await fetchLodgeData(lodgeId);

  // const data = {
  //   category: {
  //     id: lodgeData.category.id,
  //     title: lodgeData.category.title,
  //     thumbnail: lodgeData.category.thumbnail,
  //   },
  //   name: lodgeData.name,
  //   rating: lodgeData.rating,
  //   count: lodgeData.count,
  //   distance: lodgeData.description,
  // };

  // const productDetailsArray = lodgeData.room.map((r) => {
  //   return {
  //   image: string;
  //   event: string;
  //   name: string;
  //   capacity: { standard: number; maximum: number };
  //   time: { checkIn: string; checkOut: string };
  //   price: { price: number };
  //   stock: number;
  //   }
  // });

  console.log(lodgeData);
  return null;

  // return <>
  // {data ? <ProductDetailView data={data} productDetailsArray={productDetailsArray} /> : <div>데이터를 불러올 수 없습니다.</div>}
  // </>;
}

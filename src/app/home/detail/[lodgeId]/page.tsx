import { lodgeService } from "@/api/services";
import ProductDetailView from "@/views/ProductDetail/ProductDetail.view";

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

  const data = {
    id: lodgeData._id,
    category: {
      id: lodgeData.category.id,
      title: lodgeData.category.title,
      thumbnail: lodgeData.category.thumbnail,
    },
    name: lodgeData.name,
    rating: lodgeData.rating,
    count: lodgeData.count,
    distance: lodgeData.description,
    price: lodgeData.price,
    image: lodgeData.image,
  };

  const productDetailsArray = lodgeData.room.map((r) => {
    return {
      image: r.roomType.image,
      event: r.roomType.event,
      name: r.roomType.name,
      capacity: {
        standard: r.roomType.capacity.standard,
        maximum: r.roomType.capacity.maximum,
      },
      time: { checkIn: r.roomType.time.checkIn, checkOut: r.roomType.time.checkOut },
      price: { price: r.roomType.price.price },
      stock: r.stock,
    };
  });

  console.log(lodgeData);

  return <>{data ? <ProductDetailView data={data} productDetailsArray={productDetailsArray} /> : <div>데이터를 불러올 수 없습니다.</div>}</>;
}

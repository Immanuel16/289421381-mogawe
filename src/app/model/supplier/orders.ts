export class Orders {
    uuid: string
    uuidProduct: string
    productName: string
    uuidMogawers: string
    uuidUser: string
    buyerName: string
    buyerPhone: string
    buyerAddress: string
    buyerLat: number
    buyerLng: number
    quantity: number
    shipmentType: string
    shipmentName: string
    shipmentService: string
    shipmentResi: string
    shipmentFee: number
    shipmentProvinceId: number
    shipmentProvinceName: string
    shipmentCityId: number
    shipmentCityName: string
    shipmentEstMax: number
    shipmentEstMin: number
    price: number
    total: number
    commission: number
    adminFee: number
    resellerName: string
    resellerPhone: string
    resellerAddress: string
    transactionOrderId: string
    paymentMethod: string
    paymentOrderId: string
    paymentType: string
    paymentLink: string
    paymentStatus: string
    status: string
    orderDate: any
    paidDate: any
    processedDate: any
    shippingDate: any
    deliveredDate: any
    finishedDate: any
    canceledDate: any
    canceledReason: string
    trackingToken: string
    refundStatus: string
    refundBankName: any
    refundReceiver: any
    refundAccount: any
    refundEmail: any
    refundReference: any
    refundReferenceStatus: any
    imageUrl: string
}
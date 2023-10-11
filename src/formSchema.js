import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Lütfen isminizi giriniz."),
  size: Yup.string()
    .oneOf(["small", "medium", "large"], "Lütfen boyut seçiniz.")
    .required("Lütfen boyut seçiniz."),
  dough: Yup.string()
    .oneOf(["thick", "thin"], "Lütfen hamur kalınlığı seçiniz."),
  ingredients: Yup.array().of(Yup.string()).required().max(10,'Lütfen en fazla on malzeme seçiniz.')
});

//.min(4,"Lütfen en az dört malzeme seçiniz.")
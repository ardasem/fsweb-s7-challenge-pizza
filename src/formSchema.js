import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Lütfen isminizi giriniz."),
  size: Yup.string()
    .oneOf(["small", "medium", "large"], "Lütfen boyut seçiniz.")
    .required("Lütfen boyut seçiniz."),
  dough: Yup.string()
    .oneOf(["thick", "thin"], "Lütfen hamur kalınlığı seçiniz.")
    .required("Lütfen hamur kalınlığı seçiniz."),
  ingredients: Yup.array().of(
    Yup.string().required("Lütfen en az bir malzeme seçiniz.")
  ),
});

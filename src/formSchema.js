import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Lütfen isminizi giriniz.").min(2,'Lütfen en az 2 karakter giriniz.'),
  size: Yup.string()
    .oneOf(["S", "M", "L"], "Lütfen boyut seçiniz.")
    .required("Lütfen boyut seçiniz."),
  dough: Yup.string().required("Lütfen hamur kalınlığı seçiniz."),
  ingredients: Yup.array()
    .of(Yup.string())
    .required()
    .min(4, "Lütfen en az 4 adet malzeme seçiniz.")
    .max(10, "Lütfen en fazla 10 adet malzeme seçiniz."),

});



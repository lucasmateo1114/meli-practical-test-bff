# Mercado Libre - Practical Test (BFF)

## Exposed endpoints

/api/health

/api/items?q={term}

/api/items/{itemId}

## Dudas y/o comentarios durante el desarrollo

Se pedía mostrar el breadcrum pero el campo categories no estaba en el contrato presentado? Para poder hacerlo se agregó

No me gustó la idea de obtener el currency por petición así que expuse un endpoint que lo obtenga para mantenerlo en eunl contexto una vez se entre al front


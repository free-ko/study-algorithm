// 졸업 선물
// 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 것
// 상품 하나를 50%할인해서 살수 있는 쿠폰이 있음(배송비는 할인에 포함되지 않음)

// 입력 값
// - 5 28(반 학생 수, 총 예산)
// - 6 6 -> 12 or 9
// - 2 2 -> 4 or 3
// - 4 3 -> 7 or 5
// - 4 5 -> 9 or 7
// - 10 3 -> 13 or 8

// 출력 값
// - 4

const solution1 = (totalMoney, products) => {
  let total = 0;
  const sortProducts = products.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < products.length; i++) {
    const productPrice = sortProducts[i][0];
    const deliveryPrice = sortProducts[i][1];
    const discountedProductPrice = productPrice / 2 + deliveryPrice;

    let money = totalMoney - discountedProductPrice;
    let cnt = 1;
    for (let j = 0; j < products.length; j++) {
      if (j !== i && sortProducts[j][0] + sortProducts[j][1] > money) break;
      if (j !== i && sortProducts[j][0] + sortProducts[j][1] <= money) {
        money -= sortProducts[j][0] + sortProducts[j][1];
        cnt++;
      }
    }
    total = Math.max(total, cnt);
  }

  return total;
};

const totalMoney = 28;
const products = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
const result1 = solution1(totalMoney, products);
console.log(result1);

import React from "react";

function AddTodo() {
  return (
    <form>
      <div>
        <label>عنوان</label>
        <input type="text" placeholder="مثلاً ورزش کردن" />
      </div>
      <div>
        <label>توضیحات بیشتر</label>
        <textarea type='text' placeholder="توضیحاتی در مورد کار"></textarea>
      </div>
      <div>
        <label>اولویت</label>
        <select name="select">
          <option value="low" key="low">
            کم
          </option>
          <option value="medium" key="medium">
            متوسط
          </option>
          <option value="high" key="high">
            مهم
          </option>
        </select>
      </div>
      <div>
        <label>عنوان</label>
        <input type="number" placeholder="زمان به ساعت" />
      </div>
      <button type="submit">اضافه کردن کار</button>
    </form>
  );
}

export default AddTodo;

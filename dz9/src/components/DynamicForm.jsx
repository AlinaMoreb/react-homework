import React from "react";
import { useForm } from "react-hook-form";
import styles from "./DynamicForm.module.css";

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Отслеживаем значение первого поля
  const firstInputValue = watch("firstField");

  const onSubmit = (data) => {
    console.log("Форма отправлена:", data);
    alert("Форма успешно отправлена!");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Динамическая форма</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Первое поле */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Первое поле</label>
          <input
            type="text"
            placeholder="Введите минимум 5 символов"
            {...register("firstField", {
              required: "Это поле обязательно",
              minLength: {
                value: 5,
                message: "Минимальная длина — 5 символов",
              },
            })}
            className={styles.input}
          />
          {errors.firstField && (
            <p className={styles.error}>{errors.firstField.message}</p>
          )}
        </div>

        {/* Второе поле — появляется только если первое корректно */}
        {firstInputValue && firstInputValue.length >= 5 && (
          <div className={styles.formGroup}>
            <label className={styles.label}>Второе поле</label>
            <input
              type="text"
              placeholder="Введите текст"
              {...register("secondField", {
                required: "Это поле тоже обязательно",
              })}
              className={styles.input}
            />
            {errors.secondField && (
              <p className={styles.error}>{errors.secondField.message}</p>
            )}
          </div>
        )}

        <button type="submit" className={styles.button}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;

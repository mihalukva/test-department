### Компонент BreadCrumb

**BreadCrumb**- выводит текущее положение пользователя в приложении

##### Пример использования

```jsx
<BreadCrumb path={[{ name: "Departments", link: "/" }]}></BreadCrumb>
```

#### Входные параметры

```jsx
 path:Array <{link:string,name:string}>
```

**path** - массив объектов.
**link** - ссылка для перехода.
**name** - имя для отображения.

### Компонент DepartmentCardControl

**DepartmentCardControl** - компонент управления карточки департамента, состоит из трех кнопок Открыть, Редактировать, Удалить.

##### Пример использования

```jsx
<DepartmentCardControl
  onOpen={() => {
    doSamething();
  }}
  onEdit={() => {
    doSamething();
  }}
  onDelete={() => {
    doSamething();
  }}
></DepartmentCardControl>
```

#### Выходные параметры

**onOpen** - событие происходит при нажатии на кнопку Открыть
**onEdit** - событие происходит при нажатии на кнопку Редактировать
**onDelete** - событие происходит при нажатии на кнопку Удалить

### Компонент DepartmentCard

**DepartmentCard** - карточка департамента, которая состоит из заголовка, иконки, кнопок управления.

##### Пример использования

```jsx
<DepartmentCard
  name={"NAME"}
  id={"1"}
  onOpen={() => {
    doSamething();
  }}
  onEdit={() => {
    doSamething();
  }}
  onDelete={() => {
    doSamething();
  }}
></DepartmentCard>
```

#### Входные параметры

**name**- название карточки
**id** - идентификатор карточки

#### Выходные параметры

**onOpen** - событие происходит при нажатии на кнопку Открыть
**onEdit** - событие происходит при нажатии на кнопку Редактировать
**onDelete** - событие происходит при нажатии на кнопку Удалить

### Компонент DepartmentModal

**DepartmentModal**- модальное окно вызываемое при удалении карточки.

##### Пример использования

```jsx
<DepartmentModal
  isVisible={state}
  onNo={() => {
    doSamething();
  }}
  onYes={() => {
    doSamething();
  }}
></DepartmentModal>
```

#### Входные параметры

**isVisible** - состояние видимости модального окна (true|false)

#### Выходные параметры

**onNo**- событие при закрытие модального окна
**onYes**- событие при положительном ответе на вопрос

### Компонент EditFormModal

**EditFormModal**- модальное окно вызываемое при добавлении нового поля.

##### Пример использования

```jsx
<EditFormModal
  isVisible={state}
  onClose={() => {
    doSamething();
  }}
  onSave={() => {
    doSamething();
  }}
></EditFormModal>
```

#### Входные параметры

**isVisible** - состояние видимости модального окна (true|false)

#### Выходные параметры

**onClose**- событие при закрытие модального окна
**onSave**- событие при положительном ответе на вопрос

### Компонент EditForm

**EditForm**- компонент выводит и редактирует данные департамента

##### Пример использования

```jsx
<EditForm
  title="Title"
  fieldList={[
    { key: "name", value: "Oncology" },
    { key: "APIKey", value: "asd-123-zxc" },
  ]}
  readOnly={true}
  onAddField={() => {
    doSamething();
  }}
  onChangeField={() => {
    doSamething();
  }}
></EditForm>
```

#### Входные параметры

**title**- название формы
**fieldList**- список полей `Array<{ key: string;value: string;}>`
**readOnly**- определяет форма для чтения или для редактирования (true|false)

#### Выходные параметры

**onAddField**- событие происходит при добавлении нового поля.
**onChangeField**- событие происходит при изменении значения поля.

### Компонент EditDepartment

**EditDepartment**-компонент выводит данные департамента в зависимости от URL

##### Пример использования

```jsx
<Switch>
  <Route exact path="/open/:id" component={EditDepartment} />
  <Route exact path="/edit/:id" component={EditDepartment} />
  <Route exact path="/create" component={EditDepartment} />
</Switch>
```

### Компонент Department

**Department** -компонент выводит список департаментов

##### Пример использования

```jsx
<Switch>
  <Route exact path="/" component={Department} />
</Switch>
```

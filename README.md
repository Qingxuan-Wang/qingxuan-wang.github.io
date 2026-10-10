# Qingxuan Wang — Academic Homepage

这是 Qingxuan Wang 的个人学术主页：**https://qingxuan-wang.github.io/**

网站使用 GitHub Pages 原生支持的 Jekyll。页面样式仍由固定模板控制，日常维护主要编辑 Markdown 和 YAML，不需要手写论文卡片 HTML。

## 最常用的文件

| 想修改的内容 | 编辑文件 |
| --- | --- |
| 首页个人简介 | `_includes/introduction.md` |
| Research 文字 | `_includes/research.md` |
| 姓名、头像、邮箱、学术主页链接、学术服务 | `_data/site.yml` |
| 论文、CCF/JCR 标签、年份、BibTeX | `_data/publications.yml` |
| 教育经历 | `_data/education.yml` |
| 工作经历 | `_data/experience.yml` |
| 页面样式 | `style.css` |
| 筛选与外链行为 | `script.js` |
| 固定页面模板 | `index.html`，一般不需要修改 |
| 信息与分类依据 | `SOURCES.md` |

`assets/publications.bib` 会从 `_data/publications.yml` 中的 `bibtex` 字段自动生成，因此论文信息只有一个数据源。年份筛选也会根据论文数据自动生成。

## 推荐方式：直接让智能体维护

在智能体中打开本仓库，用自然语言说明修改内容即可。建议每次任务开头写：

```text
请先阅读 README.md 和 SOURCES.md，再维护这个个人学术主页。
页面由 Jekyll 生成，日常内容优先修改 _data 和 _includes，不要把内容重新硬编码到 index.html。
请保留现有页面结构、CSS 类名、默认 CCF-A 筛选和外链新标签页行为。
不要编造个人信息、论文元数据或 CCF/JCR 分区。
修改后请构建网站，并检查桌面端、手机端、论文筛选和 BibTeX，再提交并推送到 main。
```

## 添加论文

最好提供完整引用、DOI 或论文页面：

```text
请添加下面这篇论文：

[粘贴完整引用、DOI 或论文链接]

请核对作者顺序、年份、卷期、页码、DOI、CCF 和 JCR 分类，并完成：
1. 在 _data/publications.yml 中按年份倒序加入论文；
2. 同步写入该论文的 bibtex 字段；
3. 在 SOURCES.md 记录来源；
4. 不确定的分类不要猜；
5. 构建并检查卡片、All、分类、年份筛选和下载的 BibTeX；
6. 保持样式不变，提交并推送到 main。
```

论文数据示例：

```yaml
- id: example2027paper
  title: Paper Title
  authors:
    - name: Author A
    - name: Qingxuan Wang
      self: true
    - name: Author B
  venue_code: VENUE
  venue: Full Journal or Conference Name
  details: "12(3): 100–120."
  year: 2027
  filters: ccf-b jcr-q1
  ccf: B
  jcr: Q1
  url: https://doi.org/...
  bibtex: |
    @article{example2027paper,
      title = {Paper Title},
      author = {Author A and Qingxuan Wang and Author B},
      journal = {Full Journal Name},
      year = {2027}
    }
```

规则：

- `self: true` 会加粗本人姓名。
- `corresponding: true` 会在作者姓名后添加通讯作者上标 `*`。
- `filters` 可填写 `ccf-a`、`ccf-b`、`ccf-c`、`jcr-q1`、`jcr-q2`，多个标签以空格分隔。
- 没有可靠分类时写 `filters: ""`，并省略 `ccf` 和 `jcr`。
- 会议通常没有 JCR 标签。
- 新年份会自动进入年份下拉框，不需要修改 HTML。
- 没有论文链接时可以省略 `url`。
- Accepted 论文可以在 `details` 中写 `Accepted.`，正式出版后再更新。

## 更新论文

```text
请把论文“论文标题”从 Accepted 更新为正式出版：
期刊/会议：……
年份：……
卷期：……
页码：……
DOI：……

请只修改 _data/publications.yml 和 SOURCES.md；确认生成的论文卡片和 publications.bib 同步更新。
```

## 修改简介和研究方向

个人简介使用普通 Markdown：

```text
请把 _includes/introduction.md 改成下面这段英文，其他内容不变：

[粘贴新文本]

可以修正语法，但不要增加我没有提供的履历、奖项或成果。构建后确认页面布局没有变化。
```

```text
请更新 _includes/research.md，保留多因素认证、应用密码学、协议安全和后量子安全四个方向，写成两个简洁段落。
```

Markdown 中可以直接使用链接和加粗：

```markdown
I work at [Nankai University](https://cc.nankai.edu.cn/main.htm).

My research focuses on **authentication and applied cryptography**.
```

## 添加教育经历

`_data/education.yml` 当前为空。加入数据后，页面会自动出现 `Education` 区域：

```yaml
- period: 2020–2024
  institution: Nankai University
  url: https://cc.nankai.edu.cn/main.htm
  degree: Ph.D.
  field: Information Security
  details: "Advisor: Professor ..."

- period: 2017–2020
  institution: University Name
  degree: M.S.
  field: Information Security
```

给智能体的指令：

```text
请把下面的求学经历加入 _data/education.yml，按时间倒序排列。不要修改现有页面样式；构建后检查 Education 区域的桌面端和手机端布局。

[粘贴学校、专业、学位、年份、导师和链接]
```

## 添加工作经历

`_data/experience.yml` 当前为空。加入数据后，页面会自动出现 `Experience` 区域：

```yaml
- period: 2024–Present
  institution: Nankai University
  url: https://cc.nankai.edu.cn/main.htm
  role: Postdoctoral Researcher and Assistant Research Fellow
  details: "Working with Professor Ding Wang"
```

给智能体的指令：

```text
请把下面的工作经历加入 _data/experience.yml，按时间倒序排列。核对机构链接，不要补充未提供的职位或职责。

[粘贴职位、机构、院系、年份、合作导师和说明]
```

## 修改头像、邮箱或链接

姓名、头像路径、联系链接和 Academic Service 都集中在 `_data/site.yml`。

```text
请把头像替换为这个文件：[文件路径]。更新 _data/site.yml 中的 profile_image 和 profile_alt，压缩网页图片大小，并检查圆形裁切效果。
```

```text
请把邮箱改为 name@example.com，并把学校链接改为 https://example.com。所有外部网页链接继续在新标签页打开。
```

学校和导师链接目前写在 `_includes/introduction.md`；Email、Scholar、ResearchGate、DBLP 写在 `_data/site.yml`。

## CCF 与 JCR 规则

- CCF 和 JCR 是两套独立分类，可以同时显示。
- CCF 标签以 CCF 官方目录为准。
- JCR 标签必须有可核验的 JIF Quartile 来源，不能用中科院分区或 SJR 代替。
- 同一期刊可能属于多个学科，应在 `SOURCES.md` 记录采用的年份与口径。
- 没有可靠依据时不显示标签，论文仍会出现在 `All` 和对应年份中。
- 作者顺序、通讯作者、卷期、页码和 DOI 均应从可靠来源核对。

## 本地构建和预览

仓库根目录已经包含 `_config.yml`。安装 Jekyll 后运行：

```bash
jekyll serve
```

访问 `http://127.0.0.1:4000/`。

只构建、不启动服务器：

```bash
jekyll build
```

生成的网站位于 `_site/`。不要手动编辑 `_site/`，因为每次构建都会覆盖它。

## 修改完成后的检查

1. `jekyll build` 成功，无 YAML 或 Liquid 错误。
2. 首页文字、头像和样式与修改前一致或符合本次要求。
3. 默认选中 CCF-A，显示数量正确。
4. CCF-A/B/C、JCR Q1/Q2 和 All 均能正确切换。
5. 年份筛选可以与分类筛选组合使用。
6. 所有论文都能在 All 中找到。
7. `assets/publications.bib` 的构建结果包含全部论文且没有 Jekyll 头信息。
8. 外部网页链接在新标签页打开，BibTeX 保持站内下载。
9. 手机端为单列卡片，没有横向滚动。
10. `git diff --check` 没有格式错误。
11. 推送后检查线上页面确实已经更新。

## 发布

GitHub Pages 会自动处理 Jekyll 并从 `main` 分支发布：

```bash
git add .
git commit -m "Update academic homepage"
git push origin main
```

通常等待几十秒即可在 https://qingxuan-wang.github.io/ 看到更新。

## 一条完整的维护指令

```text
请维护这个 Jekyll 个人学术主页。先阅读 README.md 和 SOURCES.md，并检查 Git 状态。

本次修改内容：
[填写新增或修改内容]

内容优先写入 _data/*.yml 和 _includes/*.md，不要把数据硬编码回 index.html。核对公开来源，不要编造信息。保持当前视觉样式、CSS 类名、默认 CCF-A 筛选和外链新标签页行为。完成后构建网站，对比桌面端和手机端，测试全部论文筛选与 BibTeX，然后提交并推送到 main，最后确认 GitHub Pages 已更新。
```

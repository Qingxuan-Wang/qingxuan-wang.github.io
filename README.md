# Qingxuan Wang — Academic Homepage

这是 Qingxuan Wang 的个人学术主页，线上地址为：

**https://qingxuan-wang.github.io/**

网站采用纯 HTML、CSS 和 JavaScript 编写，不需要安装主题、Ruby 或 Node.js。推送到 GitHub 仓库的 `main` 分支后，GitHub Pages 会自动更新。

## 推荐维护方式：直接告诉智能体要改什么

维护者通常不需要手动编辑 HTML。请在智能体中打开本仓库，然后用自然语言描述修改内容。建议在每次任务开头加入：

```text
请先阅读 README.md 和 SOURCES.md，再修改这个个人主页。
修改完成后请在本地预览，检查桌面端、手机端和论文筛选功能；确认无误后提交并推送到 main 分支。
不要编造个人信息、论文信息或 CCF/JCR 分区；无法确认的内容请保留为空或向我说明。
```

智能体应完成整个维护流程：核对资料、修改网页、同步 BibTeX 和来源记录、预览测试、提交 Git，并在得到维护者授权后推送上线。

## 常用修改示例

### 添加论文

最好提供完整引用、DOI 或论文页面。如果只提供部分信息，可以让智能体从作者主页、出版社、DBLP、研究组页面和 CCF 官方目录中核对。

```text
请添加下面这篇论文：

[粘贴完整引用、DOI 或论文链接]

请完成以下工作：
1. 加入 Publications 卡片，按年份放置；
2. 加入 assets/publications.bib；
3. 在 SOURCES.md 记录来源；
4. 核对 CCF 和 JCR 标签，不确定时不要猜；
5. 如果出现新年份，同步更新年份筛选器；
6. 保持默认显示 CCF-A；
7. 检查 All、分类和年份筛选数量；
8. 提交并推送到 main 分支。
```

如果是尚未正式出版的论文，请明确写明状态：

```text
这篇论文已被 ICICS 2027 接收，目前没有卷期和页码。请标记为 Accepted，后续正式出版后再更新。
```

如果论文没有 CCF 或 JCR 标签，也可以正常加入。它会在 `All` 和对应年份下显示。

### 更新论文信息

```text
请把论文“论文标题”的状态从 Accepted 更新为正式出版：
期刊/会议：……
年份：……
卷期：……
页码：……
DOI：……

请同步修改论文卡片、BibTeX 和 SOURCES.md，并重新核对分类标签。
```

### 添加求学经历

当前页面没有独立的教育经历区。可以让智能体新增简洁的 `Education` 区域，保持现有 Jon Barron 风格。

```text
请在 Research 和 Publications 之间增加 Education 区域，按时间倒序展示：

- 2020–2024，南开大学，信息安全，博士，导师：……
- 2017–2020，中国地质大学（武汉），信息安全，硕士，导师：……
- 2013–2017，学校名称，专业名称，学士

请使用朴素的时间线或紧凑列表，不要做复杂动画。学校链接在新标签页打开，手机端不能横向溢出。
```

建议提供以下字段：

- 起止年份；
- 学校与学院；
- 学位和专业；
- 导师；
- 学位论文题目（可选）；
- 学校、导师或论文链接（可选）。

### 添加工作经历

```text
请增加 Experience 区域，按时间倒序展示以下工作经历：

- 2024–至今，南开大学，博士后、助理研究员，合作导师：汪定教授
- [其他经历]

请保持版式简洁，并让机构和导师链接在新标签页打开。
```

建议提供职位、机构、院系、起止时间、合作导师或负责人，以及一两句研究职责。没有明确来源的信息不要让智能体自行补全。

### 修改个人简介或研究方向

可以直接提供新文本：

```text
请把首页个人简介替换为下面这段英文，其他内容不变：

[粘贴新文本]

检查语法和表达，但不要增加我没有提供的履历、奖项或研究成果。
```

也可以只描述目标：

```text
请把个人简介写得更简洁，保留以下事实：南开大学博士后、助理研究员、合作导师为汪定教授，研究方向为多因素认证和应用密码学。先给出最终文本，再直接更新页面。
```

### 修改头像、邮箱或主页链接

```text
请把头像替换为这个文件：[文件路径]。
裁切为适合圆形头像的构图，压缩网页文件大小，更新社交分享图片，并检查桌面端和手机端效果。
```

```text
请把南开大学链接改为 https://cc.nankai.edu.cn/main.htm ，把邮箱改为 name@example.com。所有外部网页链接继续在新标签页打开。
```

### 调整论文分类和默认筛选

```text
请根据最新版 CCF 官方目录和可核验的 JCR 数据，重新检查全部论文标签。CCF 与 JCR 分开标注；会议论文不要添加 JCR 标签。保留来源和核验日期。
```

```text
请把论文默认筛选从 CCF-A 改为 All，并检查页面首次打开时的数量与按钮状态。
```

## 论文分类规则

- CCF 和 JCR 是两套独立分类，可以同时出现。
- CCF 标签应以 CCF 官方目录为准。
- JCR 标签必须有可核验的年度或出版方来源，不能用中科院分区或 SJR 分区代替。
- 会议论文通常只有 CCF 标签，没有 JCR 标签。
- 没有可靠分类依据的论文不显示分类标签，但仍保留在 `All` 和年份筛选中。
- 页面年份采用正式卷期年份；仅在线发表或 Accepted 论文应在来源记录中说明。
- 作者顺序、通讯作者标记、卷期、页码和 DOI 都应从可靠来源核对。

分类和论文来源集中记录在 [`SOURCES.md`](SOURCES.md)。修改论文时应同时更新该文件。

## 文件说明

| 文件 | 用途 |
| --- | --- |
| `index.html` | 个人简介、研究方向、论文卡片、学术服务及页面结构 |
| `style.css` | 桌面端、手机端、论文卡片和筛选器样式 |
| `script.js` | 论文分类与年份筛选，以及外部链接的新标签页行为 |
| `assets/publications.bib` | 页面提供下载的完整 BibTeX |
| `assets/profile-mystic.png` | 当前头像 |
| `SOURCES.md` | 个人信息、论文元数据和分类依据 |
| `.nojekyll` | 让 GitHub Pages 直接发布静态文件 |

## 手动添加论文时的结构

如果无法使用智能体，可以在 `index.html` 的 `.publication-grid` 中复制一张现有卡片。分类写在 `data-tags`，年份写在 `data-year`：

```html
<article class="publication-card" data-tags="ccf-b jcr-q1" data-year="2027">
  <div class="paper-heading">
    <span class="venue-tag">VENUE</span>
    <span class="rank-tag rank-b">CCF-B</span>
    <span class="jcr-tag">JCR Q1</span>
    <span class="year">2027</span>
  </div>
  <h3><a href="https://doi.org/...">Paper Title</a></h3>
  <p class="authors">Author A, <strong>Qingxuan Wang</strong>, Author B</p>
  <p class="venue"><em>Journal or Conference</em>, volume(issue): pages.</p>
  <div class="paper-links"><a href="https://doi.org/...">Paper ↗</a></div>
</article>
```

可用的筛选标签为：

- `ccf-a`
- `ccf-b`
- `ccf-c`
- `jcr-q1`
- `jcr-q2`

没有分类时使用 `data-tags=""`。如果增加了新年份，还需要在 `#year-select` 中加入相应选项，并同步更新 `assets/publications.bib` 和 `SOURCES.md`。

## 修改完成后的检查

请让智能体至少检查以下内容：

1. 首页可以正常打开，头像和样式文件加载成功；
2. 默认选中 CCF-A，显示数量正确；
3. CCF-A/B/C、JCR Q1/Q2 和 All 都能正确切换；
4. 年份筛选可以与分类筛选组合使用；
5. 所有论文在 All 中均可找到；
6. 外部网页链接在新标签页打开；
7. BibTeX 下载链接仍为站内下载；
8. 手机端为单列卡片，没有横向滚动；
9. `git diff --check` 没有格式错误；
10. 推送后访问线上网站确认新内容已经生效。

## 本地预览

在仓库根目录启动任意静态文件服务器，例如：

```bash
python -m http.server 8766 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8766/`。

## 发布

GitHub Pages 从 `main` 分支根目录发布。修改完成后提交并推送：

```bash
git add .
git commit -m "Update academic homepage"
git push origin main
```

通常等待几十秒即可在 https://qingxuan-wang.github.io/ 看到更新。发布后应再次检查线上页面，而不能只依赖本地预览。

## 一条完整的维护指令

维护者也可以直接把下面这段发给智能体，再补充具体资料：

```text
请维护这个个人学术主页。先阅读 README.md 和 SOURCES.md，并检查当前 Git 状态。

本次修改内容：
[在这里写要新增或修改的内容]

请核对公开来源，不要编造信息。同步修改网页、BibTeX 和来源记录；保持现有简洁布局、默认 CCF-A 筛选和外链新标签页行为。完成后进行桌面端、手机端、筛选器和链接检查，展示修改结果，然后提交并推送到 main 分支，最后确认 GitHub Pages 已经更新。
```

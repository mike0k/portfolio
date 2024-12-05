<?php

/* @var $this yii\web\View */

use yii\helpers\Html;
?>
<h2 class="section-title">Case Studies</h2>

<div class="section-content">
    <div class="case section-20" id="miller-stewart">
        <div class="row">
            <div class="col-sm-6">
                <h4>Miller Stewart</h4>
                <p class="small">
                    Estate Agency
                    <br>
                    <a class="text-link" href="https://www.millerstewart.com" target="_blank" rel="nofollow noopener">millerstewart.com</a>
                </p>

                <p>I began working with Miller Stewart Estate Agency in 2013 and as their sole web developer. They are a mid-level estate agency whos territory mainly covers the west coast and Highlands of Scotland. I worked with them to design and development of their property administration system for their network of 70 independent estate agents. It was developed using the Yii framework and while speeding up the workflow of staff and increasing their ability to handle larger workloads, it also tracked and managed the flow of leads to and from the company. It also provided real-time communication tools between the staff and their clients, online payments and automated many mundane tasks such as email reminders and feedback gathering.</p>

                <p>The software was in constant development for over 5 years and grew into a large and complex operation with many hidden services that aimed to automate time consuming tasks, track staff performance and client behaviour and manage broker leads. This information would then be used by management to make business decisions and secure better deals for themselves saving large amount of time and money. An example of this was with portals such as Rightmove who were a big overhead to the company. The tools I developed would manage and organise their stock of properties based on Rightmove's pricing model to minimise the fees and therefore significantly reducing the company's expenditure.</p>
            </div>
            <div class="col-sm-6">
                <div class="img-frame">
                    <?php $imgUrl = Yii::$app->request->baseUrl.'img/client/cases/miller-stewart.jpg'; ?>
                    <?php $thumbUrl = Yii::$app->request->baseUrl.'img/client/cases/thumb/miller-stewart.jpg'; ?>

                    <a href="<?= $imgUrl; ?>" data-fancybox data-caption="Miller Stewart">
                        <img src="<?php echo Yii::$app->request->baseUrl; ?>img/misc/loading.gif" data-src="<?php echo $thumbUrl; ?>" alt="millerstewart.com" class="img-responsive" />
                    </a>
                    <div class="overlay">
                        <div>
                            <h2>Miller Stewart</h2>
                            <a class="btn btn-black btn-block" href="<?= $imgUrl; ?>" data-fancybox data-caption="Miller Stewart">Screenshot</a>
                            <a class="btn btn-black btn-block" href="https://www.millerstewart.com" target="_blank" rel="nofollow noopener">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sep sep-sm"></div>

    <div class="case section-20" id="mcewan-fraser-legal">
        <div class="row">
            <div class="col-sm-6">
                <h4>McEwan Fraser Legal</h4>
                <p class="small">
                    Estate Agency
                    <br>
                    <a href="https://www.mcewanfraserlegal.co.uk" target="_blank" rel="nofollow noopener">mcewanfraserlegal.co.uk</a>
                </p>
                <p>In 2011 when I joined the company, they were in an unsustainable position with their property administration software which was highly susceptible to issues and required constant attention. I almost single handily rebuilt and extended their software from scratch using the Yii framework. I not only stabilised their internal workflow but also significantly increased sales and production times by automating tasks and developing new and innovative sales tools. The end result of my work lead the company to win multiple awards for several years running, including best estate agency in Scotland and best UK innovation.</p>

                <p>The work that won my team the 'best estate agency innovation' award in 2013 and the 'Miller &amp; Bryce innovation award' in 2014 was a real-time client message board that guided the sellers through the entire process of selling their property, and kept them up to date in real-time regarding the sale. No other estate agency was offering this type of service at the time and it not only offered an attractive USP but it reduced client complaints, drastically improved staff efficiency and set an industry trend.</p>

                <p>By 2013 the companies internal software was far superior that being used by their competitors so my attention was re-directed to their online marketing strategy. In any attempt to increase sales coverage and drive online lead generation, a large amount of time was spent focusing on Google Adwords and other forms of pay per click advertising. I saw phenomenal success with the company becoming market leader for many of the most popular search term related to home valuations in Scotland which increased their online lead generation ten fold.</p>
            </div>
            <div class="col-sm-6">
                <div class="img-frame">
                    <?php $imgUrl = Yii::$app->request->baseUrl.'img/client/cases/mcewan-fraser-legal.jpg'; ?>
                    <?php $thumbUrl = Yii::$app->request->baseUrl.'img/client/cases/thumb/mcewan-fraser-legal.jpg'; ?>

                    <a href="<?= $imgUrl; ?>" data-fancybox data-caption="McEwan Fraser Legal">
                        <img src="<?php echo Yii::$app->request->baseUrl; ?>img/misc/loading.gif" data-src="<?php echo $thumbUrl; ?>" alt="mcewanfraserlegal.co.uk" class="img-responsive" />
                    </a>
                    <div class="overlay">
                        <div>
                            <h2>McEwan Fraser Legal</h2>
                            <a class="btn btn-black btn-block" href="<?= $imgUrl; ?>" data-fancybox data-caption="McEwan Fraser Legal">Screenshot</a>
                            <a class="btn btn-black btn-block" href="https://www.mcewanfraserlegal.co.uk" target="_blank" rel="nofollow noopener">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php /*

 <div class="sep sep-sm"></div>
 
    <div class="case section-20" id="delta-economics">
        <div class="row">
            <div class="col-sm-6">
                <h4>Delta Economics / Complete Intelligence</h4>
                <p class="small">
                    Economic Forecasting Consultancy
                    <br>
                    <a class="text-link" href="https://www.deltaeconomics.com" target="_blank" rel="nofollow noopener">deltaeconomics.com</a> /
                    <a class="text-link" href="https://www.completeintel.com/" target="_blank" rel="nofollow noopener">completeintel.com</a>
                </p>

                <p>I worked with Delta Economics via an outsourced development contract with Robz Media which required me to regularly work with employees across the world. The work consisted of the development of 2 sites, one was a Wordpress based company website that advertised company news and public reports. The 2nd site was a Yii based reporting system that was used by the staff to calculate reports of international trade statistics which they would provide to their clients.</p>

                <p>The reporting tool was very in-depth and was required to process millions of records and run them through complex formula which presenting the data in a readable and useable format. The tools for constructing reports were even more complicated as staff would need to be able to select from a wide selection of variables, many of which were not compatible and would need to be accounted for in the systems programming.</p>

                <p>Through my work with Delta Economics, I was re-assigned to work a sister company called Complete Intelligence. Here I was tasked with developing similar tools but for a public audience. Due to the complexity of reports, this was no small task and a lot of time was spent developing a user-friendly interface for subscribers to construct and digest reports. The software has been very successful in the US and China and is quickly becoming a market leader in its field.</p>

                <p>The importance of accuracy and attention to detail with this project has been very significant as a small miscalculation could have real-world and global effect due to the nature of the data we were dealing with. Testing and validation of data was therefore very important. For example, in 2014 our software significantly contradicted forecasts published by the IMF and a lot of time was spent double checking our figures and calculations. The software was vindicated though after no issues were found and it was shown to have correctly predicted a more accurate forecast than the IMF were able to produce.</p>

            </div>
            <div class="col-sm-6">
                <div class="img-frame">
                    <?php $imgUrl = Yii::$app->request->baseUrl.'img/client/cases/delta-economics.jpg'; ?>
                    <?php $thumbUrl = Yii::$app->request->baseUrl.'img/client/cases/thumb/delta-economics.jpg'; ?>

                    <a href="<?= $imgUrl; ?>" data-fancybox data-caption="Delta Economics">
                        <img src="<?php echo Yii::$app->request->baseUrl; ?>img/misc/loading.gif" data-src="<?php echo $thumbUrl; ?>" alt="deltaeconomics.com" class="img-responsive" />
                    </a>
                    <div class="overlay">
                        <div>
                            <h2>Delta Economics</h2>
                            <a class="btn btn-black btn-block" href="<?= $imgUrl; ?>" data-fancybox data-caption="Delta Economics">Screenshot</a>
                            <a class="btn btn-black btn-block" href="https://www.deltaeconomics.com" target="_blank" rel="nofollow noopener">D.E Website</a>
                            <a class="btn btn-black btn-block" href="https://www.completeintel.com" target="_blank" rel="nofollow noopener">C.I Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 */ ?>

</div>